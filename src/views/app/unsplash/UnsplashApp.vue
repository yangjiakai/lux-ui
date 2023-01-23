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
import { relative } from "path";
const url = ref("https://api.unsplash.com/search?");
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
  perPage: 20,
  page: 1,
});

const searchResult = ref([]);
const photos = ref([]);

const photoData = reactive({
  photos: [],
  total: 0,
  totalPages: 0,
});

const collectionData = reactive({
  collections: [],
  total: 0,
  totalPages: 0,
});

const userData = reactive({
  users: [],
  total: 0,
  totalPages: 0,
});

const collections = ref([]);
const users = ref([]);
const relatedSearches = ref([]);

const tab = ref(null);

const search = async () => {
  const response = await axios.get(
    `${url.value}client_id=${searchParams.accessKey}&page=${searchParams.page}&per_page=${searchParams.perPage}&query=${searchParams.query}`
  );

  // searchResult.value = response.data.results;
  // console.log(searchResult.value);
  // Photos
  photoData.photos = response.data.photos.results;
  photoData.total = response.data.photos.total;
  photoData.totalPages = response.data.photos.total_pages;

  // Collections
  collectionData.collections = response.data.collections.results;
  collectionData.total = response.data.collections.total;
  collectionData.totalPages = response.data.collections.total_pages;

  // Users
  userData.users = response.data.users.results;
  userData.total = response.data.users.total;
  userData.totalPages = response.data.users.total_pages;

  // photos.value = response.data.photos.results;
  // collections.value = response.data.collections.results;
  // users.value = response.data.users.results;
  // RelatedSearches
  relatedSearches.value = response.data.related_searches;
};

onMounted(() => {
  search();
});

const more = async () => {
  searchParams.page++;
  const response = await axios.get(
    `${url.value}client_id=${searchParams.accessKey}&page=${searchParams.page}&per_page=${searchParams.perPage}&query=${searchParams.query}`
  );
  photoData.photos.push(...response.data.photos.results);
};

const morePhotos = async () => {
  searchParams.page++;
  const response = await axios.get(
    `${url.value}client_id=${searchParams.accessKey}&page=${searchParams.page}&per_page=${searchParams.perPage}&query=${searchParams.query}`
  );
  photoData.photos.push(...response.data.photos.results);
};

const searchRelated = (query: string) => {
  searchParams.query = query;
  search();
};
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
      <v-btn color="">Go</v-btn>
    </v-toolbar>
    <v-card class="mt-2">
      <v-tabs v-model="tab" bg-color="primary">
        <v-tab value="photos"
          ><v-icon class="mr-2">mdi-image-outline</v-icon> photos
          <span class="ml-2">({{ photoData.total }})</span></v-tab
        >
        <v-tab value="collections">
          collections<span class="ml-2"
            >({{ collectionData.total }})</span
          ></v-tab
        >
        <v-tab value="users"
          ><v-icon class="mr-2">mdi-account-multiple</v-icon> users<span
            class="ml-2"
            >({{ userData.total }})</span
          ></v-tab
        >
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <!-- Photos -->
          <v-window-item value="photos">
            <v-card
              min-height="80vh"
              class="pa-5 d-flex align-center justify-center"
              v-if="photoData.total === 0"
            >
              <v-img
                src="https://unsplash-assets.imgix.net/empty-states/photos.png"
                height="400"
              ></v-img>
            </v-card>
            <v-card min-height="80vh" class="pa-5" v-else>
              <v-row>
                <v-slide-group show-arrows>
                  <v-slide-group-item
                    v-for="item in relatedSearches"
                    :key="item.title"
                    v-slot="{ isSelected }"
                  >
                    <v-btn
                      class="ma-2"
                      rounded
                      :color="isSelected ? 'primary' : undefined"
                      @click="searchRelated(item.title)"
                    >
                      {{ item.title }}
                    </v-btn>
                  </v-slide-group-item>
                </v-slide-group>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  xl="2"
                  lg="3"
                  md="4"
                  sm="6"
                  v-for="item in photoData.photos"
                  :key="item.id"
                >
                  <v-card
                    width="100%"
                    height="480"
                    class="d-flex flex-column justify-space-between"
                  >
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
                      <v-card-title class="card-title">
                        <v-avatar size="avatarSize">
                          <img :src="item.user.profile_image.small" alt="alt" />
                        </v-avatar>
                        {{ item.user.username }}</v-card-title
                      >
                    </v-img>

                    <v-card-subtitle class="pt-4">
                      <div>
                        size: height:{{ item.height }} width:{{ item.width }}
                      </div>
                    </v-card-subtitle>

                    <v-card-text>
                      {{ item.alt_description }}

                      <div>{{ item.download_url }}</div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn prepend-icon="mdi-heart">
                        Like({{ item.likes }})
                        <v-tooltip activator="parent" location="bottom"
                          >Like</v-tooltip
                        >
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-tooltip location="bottom" text="Download">
                        <template v-slot:activator="{ props }">
                          <v-btn v-bind="props" icon="mdi-download"> </v-btn>
                        </template>
                      </v-tooltip>
                      <v-tooltip location="bottom" text="Add To Collection">
                        <template v-slot:activator="{ props }">
                          <v-btn v-bind="props" icon="mdi-plus"> </v-btn>
                        </template>
                      </v-tooltip>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
              <v-btn
                v-if="searchParams.page < photoData.totalPages"
                class="mt-10"
                block
                color="primary"
                dark
                @click="more"
                >More...</v-btn
              >
            </v-card>
          </v-window-item>

          <!-- Collections -->
          <v-window-item value="collections">
            <v-card
              min-height="80vh"
              class="pa-5 d-flex align-center justify-center"
              v-if="collectionData.total === 0"
            >
              <v-img
                src="https://unsplash-assets.imgix.net/empty-states/photos.png"
                height="400"
              ></v-img>
            </v-card>
            <v-card min-height="80vh" class="pa-5" v-else>
              <v-row>
                <v-slide-group show-arrows>
                  <v-slide-group-item
                    v-for="item in relatedSearches"
                    :key="item.title"
                    v-slot="{ isSelected }"
                  >
                    <v-btn
                      class="ma-2"
                      rounded
                      :color="isSelected ? 'primary' : undefined"
                      @click="searchRelated(item.title)"
                    >
                      {{ item.title }}
                    </v-btn>
                  </v-slide-group-item>
                </v-slide-group>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  xl="2"
                  lg="3"
                  md="4"
                  sm="6"
                  v-for="item in collectionData.collections"
                  :key="item.id"
                >
                  <v-card
                    width="100%"
                    height="480"
                    class="d-flex flex-column justify-space-between"
                  >
                    <v-img
                      class="align-end text-white"
                      :src="item.cover_photo.urls.small"
                      :lazy-src="item.cover_photo.urls.small"
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
                      <v-card-title class="card-title">
                        <v-avatar size="avatarSize">
                          <img :src="item.user.profile_image.small" alt="alt" />
                        </v-avatar>
                        {{ item.user.username }}</v-card-title
                      >
                    </v-img>

                    <v-card-subtitle class="pt-4">
                      <div>
                        <!-- size: height:{{ item.height }} width:{{ item.width }} -->
                      </div>
                    </v-card-subtitle>

                    <v-card-text>
                      {{ item.alt_description }}

                      <!-- <div>{{ item.download_url }}</div> -->
                    </v-card-text>

                    <v-card-actions>
                      <v-btn prepend-icon="mdi-heart">
                        Like
                        <v-tooltip activator="parent" location="bottom"
                          >Like</v-tooltip
                        >
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-tooltip location="bottom" text="Download">
                        <template v-slot:activator="{ props }">
                          <v-btn v-bind="props" icon="mdi-download"> </v-btn>
                        </template>
                      </v-tooltip>
                      <v-tooltip location="bottom" text="Add To Collection">
                        <template v-slot:activator="{ props }">
                          <v-btn v-bind="props" icon="mdi-plus"> </v-btn>
                        </template>
                      </v-tooltip>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
              <v-btn class="mt-10" block color="primary" dark @click="more"
                >More...</v-btn
              >
            </v-card>
          </v-window-item>

          <!-- Users -->
          <v-window-item value="users">
            <v-card
              min-height="80vh"
              class="pa-5 d-flex align-center justify-center"
              v-if="userData.total === 0"
            >
              <v-img
                src="https://unsplash-assets.imgix.net/empty-states/photos.png"
                height="400"
              ></v-img>
            </v-card>
            <v-card min-height="80vh" class="pa-5" v-else>
              <v-row>
                <v-slide-group show-arrows>
                  <v-slide-group-item
                    v-for="item in relatedSearches"
                    :key="item.title"
                    v-slot="{ isSelected }"
                  >
                    <v-btn
                      class="ma-2"
                      rounded
                      :color="isSelected ? 'primary' : undefined"
                      @click="searchRelated(item.title)"
                    >
                      {{ item.title }}
                    </v-btn>
                  </v-slide-group-item>
                </v-slide-group>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  xl="2"
                  lg="3"
                  md="4"
                  sm="6"
                  v-for="item in userData.users"
                  :key="item.id"
                >
                  <v-card
                    width="100%"
                    height="480"
                    class="d-flex flex-column justify-space-between"
                  >
                    <v-img
                      class="align-end text-white"
                      :src="item.profile_image.small"
                      :lazy-src="item.profile_image.small"
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
                      <v-card-title class="card-title">
                        <v-avatar size="avatarSize">
                          <img :src="item.profile_image.small" alt="alt" />
                        </v-avatar>
                        {{ item.username }}</v-card-title
                      >
                    </v-img>

                    <v-card-subtitle class="pt-4">
                      <div>
                        <!-- size: height:{{ item.height }} width:{{ item.width }} -->
                      </div>
                    </v-card-subtitle>

                    <v-card-text>
                      {{ item.instagram_username }}
                      {{ item.total_photos }}
                      <!-- <div>{{ item.download_url }}</div> -->
                    </v-card-text>

                    <v-card-actions>
                      <v-btn prepend-icon="mdi-heart">
                        Like
                        <v-tooltip activator="parent" location="bottom"
                          >Like</v-tooltip
                        >
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-tooltip location="bottom" text="Download">
                        <template v-slot:activator="{ props }">
                          <v-btn v-bind="props" icon="mdi-download"> </v-btn>
                        </template>
                      </v-tooltip>
                      <v-tooltip location="bottom" text="Add To Collection">
                        <template v-slot:activator="{ props }">
                          <v-btn v-bind="props" icon="mdi-plus"> </v-btn>
                        </template>
                      </v-tooltip>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
              <v-btn class="mt-10" block color="primary" dark @click="more"
                >More...</v-btn
              >
            </v-card>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
.card-title {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
