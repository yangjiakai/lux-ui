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
    animationLink="https://assets10.lottiefiles.com/packages/lf20_jGOM8KIjDM.json"
    :height="props.size"
    :width="props.size"
    class="animation-recording"
  />
</template>

<style scoped lang="scss">
.animation-recording {
  cursor: pointer;
}
</style>
