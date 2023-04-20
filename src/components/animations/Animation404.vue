<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
const props = defineProps({
  size: {
    type: Number,
    default: 500,
  },
});
</script>

<template>
  <Vue3Lottie
    animationLink="https://assets2.lottiefiles.com/packages/lf20_cr9slsdh.json"
    :height="props.size"
    :width="props.size"
  />
</template>

<style scoped lang="scss"></style>
