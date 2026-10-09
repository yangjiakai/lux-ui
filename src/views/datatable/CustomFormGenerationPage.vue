<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import AnimationFolder from "@/components/animations/AnimationFolder.vue";
</script>

<template>
  <v-container class="h-100">
    <div class="h-100 d-flex align-center justify-center">
      <div class="text-center">
        <h1 class="text-headline-large font-weight-bold text-grey">New folder.jpg</h1>
        <AnimationFolder :size="400" />
      </div>
    </div>
  </v-container>
</template>

<style scoped lang="scss"></style>
