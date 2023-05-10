<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import CurrencyItem from "./formItems/CurrencyItem.vue";
import MultiFileUpload from "./formItems/MultiFileUpload.vue";

const price = ref(2000);
</script>

<template>
  <div class="">
    <CurrencyItem v-model="price" />
    <MultiFileUpload />
  </div>
</template>

<style scoped lang="scss"></style>
