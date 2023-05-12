<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { searchCollectionsApi } from "@/api/unsplashApi";
import CopyLabel from "@/components/common/CopyLabel.vue";
import moment from "moment";

const loading = ref(true);
const totalRows = ref(0);

const queryOptions = reactive({
  query: "cat",
  page: 1,
  per_page: 10,
});

const headers = [
  { title: "ID", key: "id" },
  { title: "Title", key: "title" },
  { title: "Owner", key: "user" },
  { title: "Total", key: "total_photos", align: "center" },

  { title: "cover", key: "cover_photo", align: "center" },
  { title: "preview", key: "preview_photos", align: "center" },
  { title: "link", key: "links" },
  { title: "tags", key: "tags", width: "300px", align: "center" },
  { title: "publish", key: "published_at" },
];

const collectionList = ref([]);

const getCollections = async () => {
  loading.value = true;
  const params = queryOptions;
  const collectionsResponse = await searchCollectionsApi(params);

  collectionList.value = collectionsResponse.data.results.map((collection) => {
    return {
      id: collection.id,
      title: collection.title,
      user: collection.user,
      total_photos: collection.total_photos,

      cover_photo: collection.cover_photo,
      preview_photos: collection.preview_photos,
      links: collection.links,
      tags: collection.tags,
      published_at: moment(collection.published_at).format("YYYY/MM/DD"),
    };
  });

  totalRows.value = collectionsResponse.data.total;
  loading.value = false;
};

const onUpdateOptions = async (options) => {
  if (!queryOptions.query) return;
  queryOptions.per_page = options.itemsPerPage;
  queryOptions.page = options.page;
  await getCollections();
};

const imgOverlay = ref(false);
const imgSrc = ref("");
const previewImg = (url) => {
  imgSrc.value = url;
  imgOverlay.value = true;
};
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title class="font-weight-bold">
        <span> Unsplash Collections</span>
        <v-spacer></v-spacer>
        <div class="w-25">
          <v-text-field
            v-model="queryOptions.query"
            variant="solo"
            prepend-inner-icon="mdi-magnify"
            @click:append="getCollections"
            label="Search"
            single-line
            hide-details
            clearable
            density="compact"
          ></v-text-field>
        </div>
      </v-card-title>
      <v-divider />
      <div>
        <v-data-table-server
          :headers="headers"
          :items="collectionList"
          :search="queryOptions.query"
          :loading="loading"
          :items-per-page="queryOptions.per_page"
          :items-length="totalRows"
          item-value="id"
          @update:options="onUpdateOptions"
          fixed-header
          height="900"
        >
          <template v-slot:item="{ item }">
            <tr>
              <td># {{ item.columns.id }}</td>
              <td class="font-weight-bold">{{ item.columns.title }}</td>
              <td class="font-weight-bold">
                <v-avatar size="30" class="mr-2">
                  <img :src="item.columns.user.profile_image.small" alt="alt" />
                </v-avatar>
                <CopyLabel :text="item.columns.user.username" />
              </td>

              <td class="text-center">
                <v-chip size="small">
                  {{ item.columns.total_photos }}
                </v-chip>
              </td>

              <td class="pa-2">
                <v-img
                  :src="item.columns.cover_photo.urls.thumb"
                  height="100"
                  width="160"
                  cover
                  class="rounded-lg v-card--link"
                  @click="previewImg(item.columns.cover_photo.urls.regular)"
                />
              </td>
              <td>
                <div class="d-flex align-center">
                  <v-img
                    v-for="photo in item.columns.preview_photos"
                    :key="photo.id"
                    :src="photo.urls.thumb"
                    @click="previewImg(photo.urls.regular)"
                    height="100"
                    width="60"
                    cover
                    class="mr-2 rounded-lg v-card--link"
                  />
                </div>
              </td>
              <td>
                <CopyLabel :text="item.columns.links.html" />
              </td>

              <td>
                <v-chip
                  v-for="tag in item.columns.tags"
                  variant="outlined"
                  color="grey"
                  size="small"
                  class="font-weight-bold mx-1 my-1"
                >
                  {{ tag.title }}
                </v-chip>
              </td>
              <td>
                {{ item.columns.published_at }}
              </td>
            </tr>
          </template>

          <template v-slot:expanded-row="{ columns }">
            <tr>
              <td :colspan="columns.length">More info about</td>
            </tr>
          </template>
        </v-data-table-server>
      </div>
    </v-card>
    <v-overlay
      v-model="imgOverlay"
      location-strategy="connected"
      scroll-strategy="none"
    >
      <div
        @click="imgOverlay = false"
        class="w-screen h-screen d-flex align-center justify-center"
      >
        <v-img height="80%" :src="imgSrc" />
      </div>
    </v-overlay>
  </v-container>
</template>

<style scoped lang="scss"></style>
