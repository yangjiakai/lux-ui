<!--
* @Component: Apex Chart
* @Maintainer: J.K. Yang
* @Description: ApexChart
-->
<script setup lang="ts">
import FeatureCard from "@/components/FeatureCard.vue";
import ApexHeatMapCharts from "@/components/charts/apexchart/ApexHeatMapCharts.vue";
import ApexLineAreaCharts from "@/components/charts/apexchart/ApexLineAreaCharts.vue";
import ApexGradientChart from "@/components/charts/apexchart/ApexGradientChart.vue";
</script>
<template>
  <v-container>
    <FeatureCard title="ApexGradientChart">
      <ApexGradientChart />
    </FeatureCard>

    <FeatureCard title="ApexHeatMapCharts">
      <ApexHeatMapCharts />
    </FeatureCard>

    <FeatureCard title="ApexLineAreaCharts">
      <ApexLineAreaCharts />
    </FeatureCard>
  </v-container>
</template>

<style scoped lang="scss"></style>
