<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import FeatureCard from "./components/FeatureCard.vue";
import FeatureLoadMore from "./components/FeatureLoadMore.vue";
</script>

<template>
  <FeatureCard title="LoadMore">
    <FeatureLoadMore />
  </FeatureCard>
  <FeatureCard title="新功能2"> </FeatureCard>
  <FeatureCard title="新功能3"> </FeatureCard>
</template>

<style scoped lang="scss"></style>
