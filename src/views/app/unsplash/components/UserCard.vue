<!--
* @Component: PhotoCard
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useUnsplashStore } from "../unsplashStore";
import { User } from "../unsplashTypes";

const unsplashStore = useUnsplashStore();
const props = defineProps<{
  user: User;
}>();

const snackbar = reactive({
  isShow: false,
  timeout: 1000,
  text: "",
});

// const toggleLike = (photo: Photo) => {
//   if (!photo.liked_by_user) {
//     snackbar.text = "Added to your favorite";
//     snackbar.isShow = true;
//     unsplashStore.addToFavorite(photo);
//     photo.likes++;
//   } else {
//     snackbar.text = "Removed from your favorite";
//     snackbar.isShow = true;
//     unsplashStore.removeFromFavorite(photo);
//     photo.likes--;
//   }
//   photo.liked_by_user = !photo.liked_by_user;
// };

// const downloadPhoto = (photo: Photo) => {
//   const a = document.createElement("a");
//   a.href = photo.links.download + "&force=true";
//   a.download = photo.id + ".jpg";
//   a.click();
//   snackbar.text = "Downloading now, please wait";
//   snackbar.timeout = 2000;
//   snackbar.isShow = true;
//   snackbar.timeout = 1000;
// };
</script>

<template>
  <div class="">
    <!-- <v-card class="collection-card shadow-1">
      <router-link :to="`/apps/unsplash/collection/${collection.id}`">
        <div class="card-top">
          <v-row no-gutters>
            <v-col cols="8">
              <v-img
                height="304"
                aspect-ratio="1/2"
                cover
                :src="collection.cover_photo.urls.small"
                :lazy-src="collection.cover_photo.urls.small"
                class="mr-1"
              ></v-img>
            </v-col>
            <v-col cols="4">
              <div class="flex-1 pb-1">
                <v-img
                  height="150"
                  cover
                  :src="collection.preview_photos[1].urls.small"
                  :lazy-src="collection.preview_photos[1].urls.small"
                  class="mb-1"
                ></v-img>
                <v-img
                  height="150"
                  cover
                  :src="collection.preview_photos[2].urls.small"
                  :lazy-src="collection.preview_photos[2].urls.small"
                ></v-img>
              </div>
            </v-col>
          </v-row>
        </div>
      </router-link>
      <v-card-title>
        <router-link :to="`/apps/unsplash/collection/${collection.id}`">
          <h4 class="font-weight-bold">{{ collection.title }}</h4>
        </router-link>
      </v-card-title>
      <v-card-subtitle>
        <span> {{ collection.total_photos }} photos.</span>
        <span class="ml-2"
          >Curated by
          <router-link :to="`/apps/unsplash/user/${collection.user.username}`">
            <b>{{ collection.user.username }}</b>
          </router-link>
        </span>
      </v-card-subtitle>

      <v-card-text>
        <div class="two-line" style="height: 100px">
          <v-chip
            class="interest-chip ma-2"
            color="primary"
            label
            v-for="item in collection.tags"
            :key="item.title"
          >
            <v-icon start icon="mdi-label-outline"></v-icon>
            {{ item.title }}
          </v-chip>
        </div>
      </v-card-text>
    </v-card> -->
  </div>
</template>

<style scoped lang="scss">
.collection-card {
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 24px 0px !important;
  }
  .card-top {
    cursor: zoom-in;
  }
}
</style>
