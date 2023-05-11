<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import CurrencyItem from "./formItems/CurrencyItem.vue";
import MultiFileUpload from "./formItems/MultiFileUpload.vue";

const price = ref(2000);
const fileList = ref<any[]>([]);
</script>

<template>
  <div class="">
    <CurrencyItem v-model="price" />
    <MultiFileUpload v-model="fileList"  />
  </div>
</template>

<style scoped lang="scss"></style>
