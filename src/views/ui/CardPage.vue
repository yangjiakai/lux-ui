<template>
  <v-container>
    <Icon class="animate-icon" icon="logos:bamboo" />
    <!-- <Icon :icon="item" v-for="item in listIcons()" :key="item" /> -->
    Card
  </v-container>
</template>
<script setup lang="ts">
import { Icon, listIcons } from "@iconify/vue";
</script>
<style scoped lang="scss">
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.animate-icon {
  animation: rotate 2s infinite;
  animation-timing-function: 1s ease-in-out;
}
</style>
