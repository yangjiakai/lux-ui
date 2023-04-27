<script setup lang="ts">
import { faker } from "@faker-js/faker";
onMounted(() => {
  initPhotos();
});

const photos = ref<any[]>([]);

// 当index为js的偶数时，返回480，否则返回240
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
  photos.value = Array.from({ length: 15 }, (value, index) => ({
    id: index + "",
    url: faker.image.animals(undefined, getPhotoHeight(index), true),
    title: faker.lorem.word(),
    description: faker.lorem.text(),
  }));
};

// const loadMore = () => {
//   photos.value = photos.value.concat(
//     Array.from({ length: 5 }, (value, index) => ({
//       id: photos.value.length + index + "",
//       url: faker.image.animals(undefined, getPhotoHeight(index), true),
//       title: faker.lorem.word(),
//       description: faker.lorem.text(),
//     }))
//   );
// };

const onScroll = (e) => {
  const target = e.target;
  const scrollBottom =
    target.scrollHeight - target.scrollTop - target.clientHeight;
  console.log(scrollBottom);

  if (scrollBottom < 1) {
    setTimeout(() => {
      // loadMore();
    }, 1000);
  }
};
</script>

<template>
  <v-container class="h-full" v-scroll.self="onScroll">
    <v-card>
      <masonry-wall :items="photos" :ssr-columns="1" :padding="30">
        <template #default="{ item }">
          <v-card class="ma-3">
            <v-img
              class="align-end text-white"
              :src="item.url"
              :lazy-src="item.url"
              cover
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
