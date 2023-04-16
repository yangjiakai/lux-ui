<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import FeatureCard from "./components/FeatureCard.vue";
import FeatureLoadMore from "./components/FeatureLoadMore.vue";
import FeatureLotte from "./components/FeatureLotte.vue";
</script>

<template>
  <FeatureCard title="LoadMore">
    <FeatureLoadMore />
  </FeatureCard>
  <FeatureCard title="LotteAnimation">
    <FeatureLotte />
  </FeatureCard>
  <FeatureCard title="新功能3"> </FeatureCard>
</template>

<style scoped lang="scss"></style>
