<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { BASE_URL, ACCESS_KEY, config } from "./unsplashConfig";
import axios from "axios";

// Props
const props = defineProps({
  photoId: {
    type: String,
    default: "",
    required: true,
  },
});

const photoDetailParam = reactive({
  url: BASE_URL + "search/photos?",
  accessKey: ACCESS_KEY,
  id: "",
});

const photoUrl = computed(() => {
  return BASE_URL + "photos/" + props.photoId;
});

const photoRelatedUrl = computed(() => {
  return BASE_URL + "photos/" + props.photoId + "/related";
});

const photo = ref(null);
const relatedPhotos = ref([]);

const isLoading = ref(false);

const initData = async () => {
  isLoading.value = true;
  const photoResponse = await axios.get(photoUrl.value, config);
  const relatedResponse = await axios.get(photoRelatedUrl.value, config);
  photo.value = photoResponse.data;
  relatedPhotos.value = relatedResponse.data.results;
  isLoading.value = false;
};

initData();
</script>

<template>
  <div class="">
    <v-card height="500">
      Detail
      <v-card height="200" v-if="isLoading"> loading.... </v-card>
      <v-card v-else height="200">
        <v-img :src="photo.urls.small" :lazy-src="photo.urls.small"></v-img>
      </v-card>

      <v-card class="d-flex" v-if="isLoading">
        <div class="loader" v-for="i in 20" :key="i"></div>
      </v-card>

      <v-card class="d-flex" v-else>
        <v-img
          width="215"
          height="220"
          v-for="relatedPhoto in relatedPhotos"
          :key="relatedPhoto.id"
          :src="relatedPhoto.urls.small"
          :lazy-src="relatedPhoto.urls.small"
        ></v-img>
      </v-card>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
.loader {
  width: 215px;
  height: 220px;
  background: linear-gradient(0.25turn, transparent, #fff, transparent),
    linear-gradient(#ddd, #ddd), linear-gradient(#ddd, #ddd),
    linear-gradient(#ddd, #ddd);
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: 215px 220px, 215px 130px, 100px 15px, 150px 15px;
  background-position: -215px 0, 0 0, 15px 150px, 15px 180px;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  to {
    background-position: 215px 0, 0 0, 15px 150px, 15px 180px;
  }
}
</style>
