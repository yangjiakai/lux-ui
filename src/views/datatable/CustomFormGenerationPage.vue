<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import AnimationFolder from "@/components/animations/AnimationFolder.vue";
</script>

<template>
  <v-card height="80vh" class="d-flex align-center flex-column justify-center">
    <div class="text-center">
      <h1 class="text-h4 font-weight-bold text-grey">新建文件夹.jpg</h1>
      <AnimationFolder :size="400" />
    </div>
  </v-card>
</template>

<style scoped lang="scss"></style>
