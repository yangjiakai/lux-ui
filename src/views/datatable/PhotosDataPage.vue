<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import { searchPhotosApi } from "@/api/unsplashApi";
import CopyLabel from "@/components/common/CopyLabel.vue";
import moment from "moment";
import type { Photo } from "./types";
const loading = ref(true);
const totalRows = ref(0);

const queryOptions = reactive({
  query: "cat",
  page: 1,
  per_page: 25,
});

const headers = [
  { title: "ID", key: "id" },
  { title: "USER", key: "user" },
  { title: "COLOR", key: "color" },
  { title: "SIZE", key: "size" },
  { title: "DESCRIPTION", key: "alt_description" },
  { title: "THUMB", key: "thumb" },
  { title: "DOWNLOAD", key: "download" },
  { title: "LIKES", key: "likes" },
  { title: "TAGS", key: "tags" },
  { title: "CREATED", key: "created_at" },
];

const photosList = ref<Photo[]>([]);

const getPhotos = async () => {
  loading.value = true;
  const params = queryOptions;
  const photosResponse = await searchPhotosApi(params);

  photosList.value = photosResponse.data.results.map((photo) => {
    return {
      id: photo.id,
      // avatar: photo.user.profile_image.small,
      user: photo.user,
      color: photo.color,
      size: photo.width + " x " + photo.height,
      alt_description: photo.alt_description,
      thumb: photo.urls,
      download: photo.links.download,
      likes: photo.likes,
      tags: photo.tags,
      created_at: moment(photo.created_at).format("YYYY/MM/DD"),
      created_at2: moment(photo.created_at).format("YYYY/MM/DD"),
    };
  });

  totalRows.value = photosResponse.data.total;
  loading.value = false;
};

const onUpdateOptions = async (options) => {
  if (!queryOptions.query) return;
  queryOptions.page = options.page;
  queryOptions.per_page = options.itemsPerPage;

  await getPhotos();
};

const getLikesColor = (likes) => {
  if (likes > 400) return "red";
  else if (likes > 200) return "orange";
  else return "grey";
};

const downloadPhoto = (photo) => {
  const a = document.createElement("a");
  a.href = photo.download + "&force=true";
  a.download = photo.id + ".jpg";
  a.click();
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
        <span> Unsplash Photos</span>
        <v-spacer></v-spacer>
        <div class="w-25">
          <v-text-field
            v-model="queryOptions.query"
            variant="solo"
            prepend-inner-icon="mdi-magnify"
            @click:append="getPhotos"
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
          :items="photosList"
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
              <td>{{ item.id }}</td>
              <td class="font-weight-bold">
                <v-avatar size="30" class="mr-2">
                  <img :src="item.user.profile_image.small" alt="alt" />
                </v-avatar>
                <CopyLabel :text="item.user.username" />
              </td>

              <td class="text-center">
                <v-chip size="small" :color="item.color">
                  <CopyLabel :text="item.color" />
                </v-chip>
              </td>
              <td class="text-center">{{ item.size }}</td>

              <td>{{ item.alt_description }}</td>
              <td class="pa-2">
                <v-img
                  :src="item.thumb.thumb"
                  height="100"
                  width="160"
                  cover
                  class="rounded-lg v-card--link"
                  @click="previewImg(item.thumb.regular)"
                />
              </td>

              <td>
                <v-btn variant="flat" icon @click="downloadPhoto(item)">
                  <img
                    width="26"
                    src="https://img.icons8.com/fluency/48/null/down.png"
                  />
                </v-btn>
              </td>
              <td>
                <v-chip
                  size="small"
                  :color="getLikesColor(item.likes)"
                  class="font-weight-bold"
                >
                  {{ item.likes }}</v-chip
                >
              </td>
              <td>
                <v-chip
                  v-for="tag in item.tags"
                  variant="outlined"
                  color="grey"
                  size="small"
                  class="font-weight-bold mr-1"
                >
                  {{ tag.title }}
                </v-chip>
              </td>
              <td>
                {{ item.created_at }}
              </td>
              <td>
                {{ item.created_at2 }}
              </td>
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
