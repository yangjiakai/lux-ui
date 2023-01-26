<!--
* @Component: User
* @Maintainer: J.K. Yang
* @Description: Page Of User 
-->
<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="">{{ route.params.id }}</div>
</template>

<style scoped lang="scss"></style>
