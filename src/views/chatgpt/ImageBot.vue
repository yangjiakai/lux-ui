<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import ImageToImage from "./SDComponents/ImageToImage.vue";
import TextToImage from "./SDComponents/TextToImage.vue";
import { useStableDiffusionStore } from "@/stores/stableDiffusionStore";
const sdStore = useStableDiffusionStore();

onMounted(() => {});

const panelTab = ref("textToImage");
</script>

<template>
  <v-container class="h-full">
    <v-row class="h-full">
      <v-col cols="12" md="6">
        <v-card class="h-full">
          <v-toolbar color="primary">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Control Panel</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>

            <template v-slot:extension>
              <v-tabs fixed-tabs v-model="panelTab" bg-color="primary">
                <v-tab value="textToImage">textToImage</v-tab>
                <v-tab value="imgToImage">imgToImage</v-tab>
              </v-tabs>
            </template>
          </v-toolbar>

          <v-card-text>
            <v-window v-model="panelTab">
              <v-window-item value="textToImage">
                <TextToImage />
              </v-window-item>

              <v-window-item value="imgToImage">
                <ImageToImage />
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="h-full">
          <v-card-title> Image Panel </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-img
              v-for="img in sdStore.imgList"
              width="300"
              :src="img"
            ></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss"></style>
