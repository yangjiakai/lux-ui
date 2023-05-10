<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import CurrencyItem from "./CurrencyItem.vue";

const price = ref(2000);
</script>

<template>
  <div class="">
    <CurrencyItem v-model="price" />
  </div>
</template>

<style scoped lang="scss"></style>
