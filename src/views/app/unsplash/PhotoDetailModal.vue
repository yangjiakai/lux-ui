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
  <v-card height="200" v-if="isLoading"> loading.... </v-card>
  <v-card v-else height="90%">
    <v-card-title>
      <div class="d-flex align-center pa-3">
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
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="scrollbar-beautify">
      <v-img
        class="mx-auto"
        width="1080"
        contain
        :src="photo.urls.regular"
        :lazy-src="photo.urls.regular"
      ></v-img>
      <div class="photo-info">AAA</div>
      <div class="related-photos">
        <v-sheet v-if="relatedPhotos.length > 0" min-height="80vh">
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              v-for="photo in relatedPhotos"
              :key="photo.id"
            >
              <PhotoCard :photo="photo"></PhotoCard>
            </v-col>
          </v-row>
        </v-sheet>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions> AAAA </v-card-actions>
  </v-card>
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
