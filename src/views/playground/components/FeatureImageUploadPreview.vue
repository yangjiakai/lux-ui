<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import moment from "moment";
import { formatFileSize } from "@/utils/common";
import AnimationUpload from "@/components/animations/AnimationUpload.vue";

// Refs
const files = ref<any[]>([]);
const fileInfos = ref<any[]>([]);
const selectedFileInfos = ref<any[]>([]);
// Create FileInfos
const updatePreviews = async () => {
  fileInfos.value.length = 0;
  for (const file of files.value) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    const filePromise = new Promise((resolve, reject) => {
      reader.onload = () => {
        // 获取图片的长宽尺寸
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          const width = img.width;
          const height = img.height;

          resolve({
            name: file.name,
            size: formatFileSize(file.size),
            imageSize: width + "x" + height,
            type: file.type,
            suffix: file.name.split(".").pop(),
            lastModifiedDate: moment(file.lastModifiedDate).format(
              "YYYY-MM-DD HH:mm:ss"
            ),
            link: reader.result,
            previewEnabled: true,
          });
        };
      };
      reader.onerror = () => {
        reject(reader.error);
      };
    });
    fileInfos.value.push(await filePromise);
  }
};

// Reamove Image
const removeImage = (index: number) => {
  files.value.splice(index, 1);
  fileInfos.value.splice(index, 1);
};

// Clear Files
const clearFiles = () => {
  files.value.length = 0;
  fileInfos.value.length = 0;
};

// View Mode
const viewMode = ref("grid");
const toggleViewMode = () => {
  viewMode.value = viewMode.value === "grid" ? "list" : "grid";
};

// List View
const headers = [
  { title: "FileName", key: "name", align: "center" },
  { title: "ImageSize", key: "imageSize", align: "center" },
  { title: "Suffix", key: "suffix", align: "center" },
  { title: "TYPE", key: "type", align: "center" },
  { title: "FileSize", key: "size", align: "center" },
  { title: "Created", key: "lastModifiedDate", align: "center" },
  { title: "Preview", key: "link", align: "center" },
  { title: "PreviewEnabled", key: "previewEnabled", align: "center" },
];

// Search
const searchKey = ref("");
const filterdFileInfos = computed(() => {
  return fileInfos.value.filter(
    (fileInfo) =>
      fileInfo.name.includes(searchKey.value) ||
      fileInfo.suffix.includes(searchKey.value)
  );
});
</script>

<template>
  <div class="">
    <div class="d-flex justify-space-between align-start">
      <!-- ---------------------------------------------- -->
      <!-- File Input -->
      <!-- ---------------------------------------------- -->
      <v-row>
        <v-col cols="12" md="8" lg="7">
          <v-file-input
            v-model="files"
            @change="updatePreviews"
            color="primary"
            counter
            label="Images Upload"
            accept="image/png, image/jpeg, image/bmp"
            multiple
            placeholder="Upload your images"
            prepend-icon="mdi-image-multiple-outline"
            variant="solo"
            @click:clear="clearFiles"
            :show-size="1000"
          >
            <template v-slot:selection="{ fileNames }">
              <template v-for="(fileName, index) in fileNames">
                <v-chip
                  v-if="index < 6"
                  color="primary"
                  label
                  size="small"
                  class="me-2"
                >
                  {{ fileName }}
                </v-chip>

                <span
                  v-else-if="index === 6"
                  class="text-overline text-grey-darken-3 mx-2"
                >
                  +{{ files.length - 2 }} File(s)
                </span>
              </template>
            </template>
          </v-file-input>
        </v-col>
        <v-col cols="12" offsetLg="2" md="4" lg="3">
          <div class="mt-1 d-flex align-center">
            <!-- ---------------------------------------------- -->
            <!-- View Mode Switch -->
            <!-- ---------------------------------------------- -->
            <v-btn
              class="mx-2"
              icon
              rounded="sm"
              variant="flat"
              color="primary"
              @click="toggleViewMode"
            >
              <v-tooltip
                activator="parent"
                location="left"
                :text="viewMode === 'list' ? 'Grid View' : 'List View'"
              ></v-tooltip>
              <v-icon v-if="viewMode === 'list'">mdi-view-grid </v-icon>
              <v-icon v-else>mdi-view-list</v-icon>
            </v-btn>
            <!-- ---------------------------------------------- -->
            <!-- Search -->
            <!-- ---------------------------------------------- -->
            <v-text-field
              v-model="searchKey"
              variant="solo"
              label="Search"
              hide-details
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
    </div>

    <v-divider class="my-5"></v-divider>
    <!-- ---------------------------------------------- -->
    <!-- No File View -->
    <!-- ---------------------------------------------- -->
    <v-sheet
      class="d-flex align-center justify-center"
      height="800"
      v-if="fileInfos.length === 0"
    >
      <div class="text-center">
        <h3 class="text-h3 font-weight-bold text-primary">
          Upload Some Images
        </h3>
        <AnimationUpload />
      </div>
    </v-sheet>
    <v-sheet v-else>
      <perfect-scrollbar class="view pa-5">
        <!-- ---------------------------------------------- -->
        <!-- Grid View -->
        <!-- ---------------------------------------------- -->
        <v-row v-if="viewMode === 'grid'">
          <v-col
            class="6"
            md="4"
            lg="3"
            v-for="fileInfo in filterdFileInfos"
            :key="fileInfo.link"
          >
            <v-card>
              <v-card-title>
                <v-spacer></v-spacer>
                <v-btn @click="removeImage" class="text-primary" variant="flat"
                  ><v-icon size="30">mdi-delete</v-icon></v-btn
                ></v-card-title
              >
              <v-divider></v-divider>
              <v-card-text>
                <v-img height="300" :src="fileInfo.link"></v-img>
              </v-card-text>
              <v-divider></v-divider>
              <div class="d-flex align-center pa-3">
                <div class="flex-fill">
                  <h5 class="text-h6 font-weight-bold">{{ fileInfo.name }}</h5>
                  <h6 class="text-grey">
                    {{ fileInfo.suffix }} {{ fileInfo.imageSize }}
                  </h6>
                </div>
                <div>
                  <v-chip
                    color="primary"
                    class="font-weight-bold"
                    label
                    rounded="sm"
                    variant="elevated"
                  >
                    {{ fileInfo.type }}
                  </v-chip>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!-- ---------------------------------------------- -->
        <!-- List View -->
        <!-- ---------------------------------------------- -->
        <v-data-table
          v-else
          v-model="selectedFileInfos"
          :headers="headers"
          :items="filterdFileInfos"
          item-value="name"
          show-select
          fixed-header
          height="700"
        >
          <template v-slot:item.name="{ item }">
            <span class="font-weight-bold">{{ item.raw.name }}</span>
          </template>
          <template v-slot:item.link="{ item }">
            <v-img
              class="mx-auto my-2"
              :src="item.raw.link"
              height="100"
              round="sm"
            ></v-img>
          </template>
          <template v-slot:item.type="{ item }">
            <v-chip class="font-weight-bold" color="primary">{{
              item.raw.type
            }}</v-chip>
          </template>
          <template v-slot:item.previewEnabled="{ item }">
            <v-btn
              v-if="item.raw.previewEnabled"
              class="font-weight-bold"
              variant="flat"
              color="blue"
              >Yes</v-btn
            >
            <v-btn v-else class="font-weight-bold" variant="flat" color="error"
              >No</v-btn
            >
          </template>
        </v-data-table>
      </perfect-scrollbar>
    </v-sheet>
  </div>
</template>

<style scoped lang="scss">
.view {
  height: 800px;
}
</style>
