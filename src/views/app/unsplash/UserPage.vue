<!--
* @Component: User
* @Maintainer: J.K. Yang
* @Description: Page Of User 
-->
<script setup lang="ts">
import { BASE_URL, config } from "./unsplashConfig";
import axios from "axios";

const route = useRoute();
const userProfileUrl = computed(() => {
  return BASE_URL + "users/" + route.params.username;
});

const userPhotosUrl = computed(() => {
  return BASE_URL + "users/" + route.params.username + "/photos";
});

const userLikesUrl = computed(() => {
  return BASE_URL + "users/" + route.params.username + "/likes";
});

const userCollectionsUrl = computed(() => {
  return BASE_URL + "users/" + route.params.username + "/collections";
});

const isLoading = ref(false);

const initData = async () => {
  isLoading.value = true;
  const userProfileResponse = await axios.get(userProfileUrl.value, config);
  const userPhotosResponse = await axios.get(userPhotosUrl.value, config);
  isLoading.value = false;
};

initData();
</script>

<template>
  <div class="">{{ route.params.username }}</div>
</template>

<style scoped lang="scss"></style>
