<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { txt2imgApi } from "@/api/stableDiffusionApi";
import { useStableDiffusionStore } from "@/stores/stableDiffusionStore";
const sdStore = useStableDiffusionStore();
const params = reactive({
  seed: -1,
  enable_hr: false,
  height: 200,
  negative_prompt: "",
  prompt: "1cat",
  width: 200,
  steps: 20,
});

const imageGenerate = async () => {
  const res = await txt2imgApi(params);
  sdStore.updateImgList(res.data.images);
};
</script>

<template>
  <v-card height="800">
    <v-card-text>
      <!-- ---------------------------------------------- -->
      <!-- Prompt  -->
      <!-- ---------------------------------------------- -->
      <v-label class="font-weight-medium my-3">Prompt</v-label>
      <v-textarea
        v-model="params.prompt"
        color="primary"
        variant="outlined"
        density="compact"
        type="text"
        placeholder="Prompt"
        hide-details
      />

      <!-- ---------------------------------------------- -->
      <!-- Negative Prompt  -->
      <!-- ---------------------------------------------- -->
      <v-label class="font-weight-medium my-3">Negative Prompt</v-label>
      <v-textarea
        v-model="params.negative_prompt"
        color="primary"
        variant="outlined"
        density="compact"
        type="text"
        placeholder="Negative Prompt"
        hide-details
      />

      <!-- ---------------------------------------------- -->
      <!-- Width   -->
      <!-- ---------------------------------------------- -->
      <v-label class="font-weight-medium my-3">Width</v-label>
      <v-slider
        v-model="params.width"
        thumb-label="always"
        max="2480"
        step="10"
        color="primary"
      ></v-slider>
      <!-- ---------------------------------------------- -->
      <!-- Height   -->
      <!-- ---------------------------------------------- -->
      <v-label class="font-weight-medium my-3">Height</v-label>
      <v-slider
        v-model="params.height"
        thumb-label="always"
        max="2480"
        step="10"
        color="primary"
      ></v-slider>

      <v-btn size="x-large" color="primary" block @click="imageGenerate"
        >Generate</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss"></style>
