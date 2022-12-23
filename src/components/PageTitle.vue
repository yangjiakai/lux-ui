<template>
  <h1 class="text-h4 mt-5">{{ title }}</h1>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const title = ref("");

watchEffect(() => {
  if (route.meta) {
    title.value = route.meta.title;
  }
});
</script>
