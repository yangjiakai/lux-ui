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
const select = ref({ state: 'Florida', abbr: 'FL' })
const items = ref([
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]);
</script>

<template>
  <div class="">
    <CurrencyItem v-model="price" />
    <MultiFileUpload v-model="fileList" />
    <v-select v-model="select" :hint="`${select.state}, ${select.abbr}`" :items="items" item-title="state"
      item-value="abbr" label="Select" persistent-hint single-line></v-select>
  </div>
</template>

<style scoped lang="scss"></style>
