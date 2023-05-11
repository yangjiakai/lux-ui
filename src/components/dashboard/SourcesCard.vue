<template>
  <div
    v-if="loading"
    class="h-full d-flex flex-grow-1 align-center justify-center"
  >
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <div v-else>
    <h6 class="text-h6 d-flex align-center font-weight-bold">
      <span class="pa-5">Pie</span>
    </h6>
    <v-card class="" variant="flat">
      <PieChart1 />
    </v-card>
  </div>
</template>

<script setup lang="ts">
import PieChart1 from "@/views/chart/component/PieChart1.vue";
</script>

<style lang="scss" scoped></style>
