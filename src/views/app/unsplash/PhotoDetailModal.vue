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
  <div>
    <div class="d-flex align-center">
      <div>
        <v-icon color="white" size="50" class="mx-5">mdi-arrow-left</v-icon>
      </div>
      <v-card class="flex-1" height="90%">
        <v-card height="200" v-if="isLoading"> loading.... </v-card>
        <div v-else>
          <div class="d-flex align-center clas pa-3">
            <div class="flex-1 d-flex align-center">
              <div>
                <v-avatar class="mr-3" size="avatarSize" color="red">
                  <img :src="photo.user.profile_image.small" alt="alt" />
                </v-avatar>
              </div>

              <div>
                <p>{{ photo.user.name }}</p>
                <p v-if="photo.user.for_hire" class="text-info">
                  Available for hire
                  <v-icon size="16">mdi-check-circle</v-icon>
                </p>
              </div>
            </div>
            <div>
              <v-btn color="grey" variant="text" icon="mdi-heart"></v-btn>
              <v-btn color="grey" variant="text" icon="mdi-plus"></v-btn>

              <v-btn-toggle size="small" variant="outlined" divided>
                <v-btn size="small"> Download </v-btn>

                <v-menu transition="slide-x-transition" location="bottom end">
                  <template v-slot:activator="{ props }">
                    <v-btn size="small" v-bind="props">
                      <v-icon icon="mdi-chevron-down"></v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item value="small"> Small </v-list-item>
                    <v-list-item value="medium"> Medium </v-list-item>
                    <v-list-item value="large"> Large </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item value="row">
                      Row ({{ photo.width }} x {{ photo.height }})
                    </v-list-item>
                  </v-list>
                  <!-- <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list> -->
                </v-menu>
              </v-btn-toggle>
            </div>
          </div>
          <v-img
            class="mx-auto"
            width="1080"
            contain
            :src="photo.urls.regular"
            :lazy-src="photo.urls.regular"
          ></v-img>
        </div>

        <!-- <v-card class="d-flex" v-if="isLoading">
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
        </v-card> -->
      </v-card>
      <div>
        <v-icon color="white" size="50" class="mx-5">mdi-arrow-right</v-icon>
      </div>
    </div>
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
