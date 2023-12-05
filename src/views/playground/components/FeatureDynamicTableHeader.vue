<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
const loading = ref(false);

const serverItems = ref([
  {
    static1: "属性1",
    static2: "属性2",
    static3: "属性3",
  },
  {
    static1: "属性1-2",
    static2: "属性2-2",
    static3: "属性3-2",
  },
  {
    static1: "属性1-3",
    static2: "属性2-3",
    static3: "属性3-3",
  },
]);

const staticHeader = ref([
  { key: "static1", title: "属性1" },
  { key: "static2", title: "属性2" },
  { key: "static3", title: "属性3" },
]);

const dynmicHeader = ref<any>([]);
const headers = computed(() => {
  return [...staticHeader.value, ...dynmicHeader.value];
});

const addDynamicHeader = () => {
  dynmicHeader.value = [
    { key: "dynamic1", title: "动态属性1" },
    { key: "dynamic2", title: "动态属性2" },
    { key: "dynamic3", title: "动态属性3" },
  ];
};
</script>

<template>
  <div class="">
    <v-btn class="mb-5" color="primary" @click="addDynamicHeader"
      >增加动态header</v-btn
    >
    <v-data-table-server
      :itemsLength="headers.length"
      :headers="headers"
      :items="serverItems"
      :loading="loading"
      class="elevation-1"
    >
    </v-data-table-server>
  </div>
</template>

<style scoped lang="scss"></style>
