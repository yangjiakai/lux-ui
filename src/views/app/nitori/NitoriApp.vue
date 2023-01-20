<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: Imitate Nitori App
-->
<script setup lang="ts">
import { Icon, listIcons } from "@iconify/vue";

import { useAxios } from "@vueuse/integrations/useAxios";

const url = ref("https://api.unsplash.com/search/photos?page=1&query=chair");
const accessKey = ref("mfB0t1DgccWtivNuh8KD06FMIZcun7vE_x_BSYQrfq8");

const { data, isLoading, isFinished, execute } = useAxios(
  `${url.value}&client_id=${accessKey.value}`
);

const filteredItems = computed(() => {
  let result = [];
  if (isFinished.value) {
    result = data.value.results;
    console.log(data.value);
  }
  return result;
});
</script>

<template>
  <div class=""></div>
</template>

<style scoped lang="scss"></style>
