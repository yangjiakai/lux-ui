<script setup lang="ts">
import { ref, onMounted } from "vue";
import ApexHeatMapCharts from "@/components/charts/apexchart/ApexHeatMapCharts.vue";
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
      <span class="flex-1">Table</span>
    </h6>
    <v-card class="pa-5" variant="flat">
      <ApexHeatMapCharts />
    </v-card>
  </div>
</template>

<style lang="scss" scoped></style>
