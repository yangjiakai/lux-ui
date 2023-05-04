<!--
* @Component: EchartOthers
* @Maintainer: J.K. Yang
* @Description: Echart 其他图表
-->
<script setup lang="ts">
import FeatureCard from "@/components/FeatureCard.vue";
import WaterDropChart1 from "./component/WaterDropChart1.vue";
</script>

<template>
  <v-container class="">
    <FeatureCard title="WaterDropChart">
      <WaterDropChart1 />
    </FeatureCard>
  </v-container>
</template>

<style scoped lang="scss"></style>
