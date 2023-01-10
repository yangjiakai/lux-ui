<template>
  <h1 class="text-h4 mt-5">{{ title }}</h1>
</template>

<script setup>
const route = useRoute();

const title = ref("");

watchEffect(() => {
  if (route.meta) {
    title.value = route.meta.title;
  }
});
</script>
