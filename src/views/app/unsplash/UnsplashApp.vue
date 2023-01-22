<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: Imitate Nitori App
-->
<script setup lang="ts">
import { Icon, listIcons } from "@iconify/vue";
import axios from "axios";

import { useAxios } from "@vueuse/integrations/useAxios";
import { log } from "console";
import { LazyImg, Waterfall } from "vue-waterfall-plugin-next";
import "vue-waterfall-plugin-next/style.css";
const url = ref("https://api.unsplash.com/search/photos?");
const accessKey = ref("mfB0t1DgccWtivNuh8KD06FMIZcun7vE_x_BSYQrfq8");
let currentList = [];

// const { data, isLoading, isFinished, execute } = useAxios(
//   `${url.value}&client_id=${accessKey.value}`
// );

// const filteredItems = computed(() => {
//   let result = [];
//   if (isFinished.value) {
//     result = data.value.results;
//     console.log(data.value);
//   }
//   return result;
// });

const searchParams = reactive({
  accessKey: "mfB0t1DgccWtivNuh8KD06FMIZcun7vE_x_BSYQrfq8",
  query: "book",
  perPage: 10,
  page: 1,
});

const searchResult = ref([]);

const search = async () => {
  const response = await axios.get(
    `${url.value}client_id=${searchParams.accessKey}&page=${searchParams.page}&per_page=${searchParams.perPage}&query=${searchParams.query}`
  );

  currentList = response.data.results;
  searchResult.value = currentList;
};

onMounted(() => {
  search();
});

const more = async () => {
  searchParams.page++;
  const response = await axios.get(
    `${url.value}client_id=${searchParams.accessKey}&page=${searchParams.page}&per_page=${searchParams.perPage}&query=${searchParams.query}`
  );
  searchResult.value.push(...response.data.results);
};

// const append = async () => {
//   console.log("append");

//   searchParams.page++;
//   const response = await axios.get(
//     `${url.value}client_id=${searchParams.accessKey}&page=${searchParams.page}&per_page=${searchParams.perPage}&query=${searchParams.query}`
//   );

//   console.log(searchResult.value);
//   searchResult.value.push(...response.data.results);
// };

const options = reactive({
  // 唯一key值
  rowKey: "id",
  // 卡片之间的间隙
  gutter: 10,
  // 是否有周围的gutter
  hasAroundGutter: true,
  // 卡片在PC上的宽度
  width: 200,

  // 自定义行显示个数，主要用于对移动端的适配
  breakpoints: {
    1200: {
      // 当屏幕宽度小于等于1200
      rowPerView: 4,
    },
    800: {
      // 当屏幕宽度小于等于800
      rowPerView: 3,
    },
    500: {
      // 当屏幕宽度小于等于500
      rowPerView: 2,
    },
  },
  // 动画效果
  animationEffect: "animate__fadeInUp",
  // 动画时间
  animationDuration: 1000,
  // 动画延迟
  animationDelay: 300,
  // 背景色
  backgroundColor: "#2C2E3A",
  // 是否懒加载
});
</script>

<template>
  <div class="">
    <v-toolbar color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-text-field
        v-model="searchParams.query"
        hide-details
        prepend-inner-icon="mdi-magnify"
        single-line
        placeholder="Search photos"
        @keyup.enter="search"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn color="success">text</v-btn>
    </v-toolbar>
    <v-card>
      <!-- <div
        v-masonry="'containerId'"
        transition-duration="0.3s"
        item-selector=".item"
        class="masonryWrap"
      >
        <div
          v-for="item in searchResult"
          :key="item.id"
          v-masonry-tile
          class="masonryWrap_item item"
        >
          <v-img :src="item.urls.small" width="100%" />
          aaa
        </div>
      </div> -->

      <!-- <div
        v-masonry
        class="masonryWrap mx-auto"
        transition-duration="0.3s"
        item-selector=".item"
        fitWidth
      >
        <div
          v-masonry-tile
          class="item mx-auto"
          v-for="item in searchResult"
          :key="item.id"
        >
          <v-card class="ma-3" width="400">
            <v-img
              class="align-end text-white"
              :src="item.urls.small"
              :lazy-src="item.urls.small"
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
              <v-card-title class="card-title">{{
                item.user.username
              }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
              <div>size: height:{{ item.height }} width:{{ item.width }}</div>
            </v-card-subtitle>

            <v-card-text>
              {{ item.alt_description }}

              <div>{{ item.download_url }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary"> Share </v-btn>

              <v-btn color="primary"> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div> -->
      <!-- <masonry-wall :items="searchResult" :ssr="{ columns: 1 }">
        <template #default="{ item }">
          <v-card class="ma-3" max-width="400">
            <v-img
              class="align-end text-white"
              :src="item.urls.small"
              :lazy-src="item.urls.small"
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
              <v-card-title class="card-title">{{
                item.user.username
              }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
              <div>size: height:{{ item.height }} width:{{ item.width }}</div>
            </v-card-subtitle>

            <v-card-text>
              {{ item.alt_description }}

              <div>{{ item.download_url }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary"> Share </v-btn>

              <v-btn color="primary"> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </masonry-wall> -->
      <v-card>
        <v-row class="pa-5">
          <v-col
            cols="12"
            xl="2"
            lg="3"
            md="4"
            sm="6"
            v-for="item in searchResult"
            :key="item.id"
          >
            <v-card width="100%" height="450">
              <v-img
                class="align-end text-white"
                :src="item.urls.small"
                :lazy-src="item.urls.small"
                height="300"
                cover
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey-lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <v-card-title class="card-title">{{
                  item.user.username
                }}</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4">
                <div>size: height:{{ item.height }} width:{{ item.width }}</div>
              </v-card-subtitle>

              <v-card-text>
                {{ item.alt_description }}

                <div>{{ item.download_url }}</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary"> Share </v-btn>

                <v-btn color="primary"> Explore </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <!-- <div class="masonrys">
        <div class="aa" v-for="item in searchResult" :key="item.id">
          <v-img :src="item.urls.small"> </v-img>
        </div>
      </div> -->
      <!-- <div>
        <h2 class="title">resposive masonry</h2>
        <div class="masonry">
          <v-img
            v-for="item in searchResult"
            :key="item.id"
            :src="item.urls.small"
          >
          </v-img>
        </div>
      </div> -->
      <!-- <Waterfall :list="searchResult">
        <template #item="{ item }">
          <v-card class="ma-3">
            <v-img
              class="align-end text-white"
              :src="item.urls.small"
              :lazy-src="item.urls.small"
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
              <v-card-title class="card-title">{{
                item.user.username
              }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
              <div>size: height:{{ item.height }} width:{{ item.width }}</div>
            </v-card-subtitle>

            <v-card-text>
              {{ item.alt_description }}

              <div>{{ item.download_url }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary"> Share </v-btn>

              <v-btn color="primary"> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </Waterfall> -->
      <v-btn class="mt-10" block color="primary" dark @click="more"
        >More...</v-btn
      >
    </v-card>
  </div>
</template>

<style scoped lang="scss"></style>
