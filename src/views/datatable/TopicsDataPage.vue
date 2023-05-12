<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { getTopicsApi } from "@/api/unsplashApi";
import CopyLabel from "@/components/common/CopyLabel.vue";
import moment from "moment";

const loading = ref(true);
const totalRows = ref(0);

const queryOptions = reactive({
  query: "cat",
  page: 1,
  per_page: 19,
});

const headers = [
  { title: "ID", key: "id" },
  { title: "Title", key: "title" },
  { title: "Cover", key: "cover_photo", align: "center" },
  { title: "Preview", key: "preview_photos", align: "center" },
  { title: "Photos", key: "total_photos", align: "center" },
  { title: "Description", key: "description", width: "500px" },

  { title: "Link", key: "links" },
  { title: "Publish", key: "published_at" },
  { title: "", key: "data-table-expand" },
];

const topicList = ref([]);

const getTopics = async () => {
  loading.value = true;
  const params = queryOptions;
  const topicsResponse = await getTopicsApi(params);

  topicList.value = topicsResponse.data.map((topic) => {
    return {
      id: topic.id,
      title: topic.title,
      description: topic.description,
      total_photos: topic.total_photos,
      cover_photo: topic.cover_photo,
      preview_photos: topic.preview_photos,
      links: topic.links,
      published_at: moment(topic.published_at).format("YYYY/MM/DD"),
    };
  });

  totalRows.value = topicsResponse.data.length;
  loading.value = false;
};

const onUpdateOptions = async (options) => {
  if (!queryOptions.query) return;
  queryOptions.per_page = options.itemsPerPage;
  queryOptions.page = options.page;
  await getTopics();
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
        <span> Unsplash Topics</span>
        <v-spacer></v-spacer>

        <div class="w-25">
          <v-text-field
            v-model="queryOptions.query"
            variant="solo"
            prepend-inner-icon="mdi-magnify"
            @click:append="getTopics"
            label="Search"
            single-line
            hide-details
            clearable
            density="compact"
          ></v-text-field>
        </div>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-data-table-server
          :headers="headers"
          :items="topicList"
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
              <td class="font-weight-bold">#{{ item.columns.id }}</td>
              <td class="font-weight-bold">{{ item.columns.title }}</td>
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
                    height="100"
                    width="60"
                    cover
                    class="mr-2 rounded-lg v-card--link"
                    @click="previewImg(photo.urls.regular)"
                  />
                </div>
              </td>
              <td class="text-center">
                <v-chip size="small">
                  {{ item.columns.total_photos }}
                </v-chip>
              </td>
              <td>{{ item.columns.description }}</td>

              <td>
                <CopyLabel :text="item.columns.links.html" />
              </td>
              <td>
                {{ item.columns.published_at }}
              </td>
            </tr>
          </template>
        </v-data-table-server>
      </v-card-text>
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
