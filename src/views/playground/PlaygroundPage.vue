<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import FeatureCard from "./components/FeatureCard.vue";
import FeatureLoadMore from "./components/FeatureLoadMore.vue";
import FeatureLotte from "./components/FeatureLotte.vue";
import FeatureChatBot from "./components/FeatureChatBot.vue";
import FeatureDynamicScroller from "./components/FeatureDynamicScroller.vue";
import FeatureImageUploadPreview from "./components/FeatureImageUploadPreview.vue";
import FeatureMultipleSelect from "./components/FeatureMultipleSelect.vue";
import FeatureGithubEventTimeLine from "./components/FeatureGithubEventTimeLine.vue";
import FeatureFacker from "./components/FeatureFacker.vue";
import FeatureEditData from "./components/FeatureEditData.vue";
import FeatureTTS from "./components/FeatureTTS.vue";
</script>

<template>
  <FeatureCard title="LoadMore">
    <FeatureLoadMore />
  </FeatureCard>

  <FeatureCard title="LotteAnimation">
    <FeatureLotte />
  </FeatureCard>

  <FeatureCard title="ChatBot">
    <FeatureChatBot />
  </FeatureCard>

  <FeatureCard title="DynamicScroller">
    <FeatureDynamicScroller />
  </FeatureCard>

  <FeatureCard title="File">
    <FeatureFile />
  </FeatureCard>

  <FeatureCard title="ImageUploadPreview">
    <FeatureImageUploadPreview />
  </FeatureCard>

  <FeatureCard title="MultipleSelect">
    <FeatureMultipleSelect />
  </FeatureCard>

  <FeatureCard title="GithubEventTimeLine">
    <FeatureGithubEventTimeLine />
  </FeatureCard>

  <FeatureCard title="Facker">
    <FeatureFacker />
  </FeatureCard>

  <FeatureCard title="EditData">
    <FeatureEditData />
  </FeatureCard>

  <FeatureCard title="TTS">
    <FeatureTTS />
  </FeatureCard>
</template>

<style scoped lang="scss"></style>
