<!--
* @Component: Apex Chart
* @Maintainer: J.K. Yang
* @Description: ApexChart
-->
<script setup lang="ts">
import ApexHeatMapCharts from "@/components/charts/apexchart/ApexHeatMapCharts.vue";
import ApexLineAreaCharts from "@/components/charts/apexchart/ApexLineAreaCharts.vue";
</script>
<template>
  <v-container>
    <h1 class="text-h5">ApexChart</h1>
    <ApexHeatMapCharts />
    <ApexLineAreaCharts />
  </v-container>
</template>

<style scoped lang="scss"></style>
