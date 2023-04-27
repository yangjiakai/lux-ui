<script setup lang="ts">
import { faker } from "@faker-js/faker";
onMounted(() => {
  initPhotos();
});

const photos = ref<any[]>([]);
const getPhotoHeight = (index: number) => {
  let height = 0;
  if (index % 3 === 0) {
    height = 480;
  } else if (index % 3 === 1) {
    height = 240;
  } else {
    height = 360;
  }
  return height;
};

const initPhotos = () => {
  photos.value = Array.from({ length: 25 }, (value, index) => ({
    id: index + "",
    url: faker.image.business(undefined, getPhotoHeight(index), true),
    title: faker.lorem.word(),
    description: faker.lorem.text(),
  }));
};

const loadedImages = ref(0);
const isLoading = computed(() => loadedImages.value < photos.value.length);
const onImageLoad = () => {
  loadedImages.value++;
};
</script>

<template>
  <v-container>
    <div v-if="isLoading" class="text-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <v-card :style="isLoading ? 'opacity: 0;' : ''">
      <masonry-wall :items="photos" :ssr-columns="1" :padding="30">
        <template #default="{ item }">
          <v-card class="ma-3">
            <v-img
              class="align-end text-white"
              :src="item.url"
              cover
              @load="onImageLoad"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
              <v-card-title>Title{{ item.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
              The {{ item.id }} item
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="primary"> Share </v-btn>

              <v-btn color="primary"> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </masonry-wall>
    </v-card>
  </v-container>
</template>

<style scoped></style>
