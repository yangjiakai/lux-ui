<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const files = ref<File[]>([]);
const fileInfos = ref<any[]>([]);
const updatePreviews = async () => {
  fileInfos.value.length = 0;
  for (const file of files.value) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    const filePromise = new Promise((resolve, reject) => {
      reader.onload = () => {
        resolve({
          link: reader.result,
          name: file.name,
          size: file.size,
          type: file.type,
        });
      };
      reader.onerror = () => {
        reject(reader.error);
      };
    });
    fileInfos.value.push(await filePromise);
  }
};

const removeImage = (index: number) => {
  fileInfos.value.splice(index, 1);
};
</script>

<template>
  <div class="">
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
      :show-size="1000"
    >
      <template v-slot:selection="{ fileNames }">
        <template v-for="(fileName, index) in fileNames" :key="fileName">
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
    <v-divider class="my-5"></v-divider>
    <v-row>
      <v-col class="6" md="4" lg="3" v-for="fileInfo in fileInfos">
        <v-card>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-btn @click="removeImage" class="text-primary" variant="flat"
              ><v-icon size="30">mdi-delete</v-icon></v-btn
            ></v-card-title
          >
          <v-divider></v-divider>
          <v-card-text>
            <v-img height="400" :src="fileInfo.link"></v-img>
          </v-card-text>
          <v-divider></v-divider>
          <div class="d-flex align-center pa-3">
            <div class="flex-1">
              <h5 class="text-h6 font-weight-bold">{{ fileInfo.name }}</h5>
              <h6 class="text-grey">{{ fileInfo.type }}</h6>
            </div>
            <div>
              <v-chip variant="elevated"> IMAGE </v-chip>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss"></style>
