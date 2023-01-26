<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { BASE_URL, config } from "./unsplashConfig";
import axios from "axios";
const route = useRoute();

const collectionUrl = computed(() => {
  return BASE_URL + "collections/" + route.params.id;
});

const collectionPhotosUrl = computed(() => {
  return BASE_URL + "collections/" + route.params.id + "/photos";
});

const collectionSimilarUrl = computed(() => {
  return BASE_URL + "collections/" + route.params.id + "/similar";
});

const isLoading = ref(false);

const initData = async () => {
  isLoading.value = true;
  const collectionResponse = await axios.get(collectionUrl.value, config);
  const collectionPhotosResponse = await axios.get(
    collectionPhotosUrl.value,
    config
  );
  const collectionSimilarResponse = await axios.get(
    collectionSimilarUrl.value,
    config
  );
  isLoading.value = false;
};

initData();
</script>

<template>
  <div class="">{{ route.params.id }}</div>
</template>

<style scoped lang="scss"></style>
