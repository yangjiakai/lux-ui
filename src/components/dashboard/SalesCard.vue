<script setup lang="ts">
import ApexLineAreaCharts from "@/components/charts/apexchart/ApexLineAreaCharts.vue";
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>
<template>
  <!-- loading spinner -->
  <div
    v-if="loading"
    class="h-full d-flex flex-grow-1 align-center justify-center"
  >
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <div v-else>
    <h6 class="text-h6 pa-5 d-flex align-center">
      <span class="flex-1">Sales</span>
      <v-btn variant="text" color="grey">查看报告</v-btn>
    </h6>

    <ApexLineAreaCharts />
  </div>
</template>

<style lang="scss" scoped></style>
