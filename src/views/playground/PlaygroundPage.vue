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
import FeatureFaker from "./components/FeatureFaker.vue";
import FeatureEditData from "./components/FeatureEditData.vue";
import FeatureTTS from "./components/FeatureTTS.vue";
import FeatureGradientChart from "./components/FeatureGradientChart.vue";
import FeatureFormItem from "./components/FeatureFormItem.vue";
import FeatureDynamicRouter from "./components/FeatureDynamicRouter.vue";
import FeatureAutoAnimation from "./components/FeatureAutoAnimation.vue";
import FeatureComplexSearch from "./components/FeatureComplexSearch.vue";
import FeatureGamma from "./components/FeatureGamma.vue";
import FeatureExpandTable from "./components/FeatureExpandTable.vue";
import FeatureDynamicTableHeader from "./components/FeatureDynamicTableHeader.vue";
</script>

<template>
  <v-container class="fluid">
    <FeatureCard title="ExpandTable">
      <FeatureExpandTable />
    </FeatureCard>

    <FeatureCard title="Gamma">
      <FeatureGamma />
    </FeatureCard>

    <FeatureCard title="ComplexSearch">
      <FeatureComplexSearch />
    </FeatureCard>

    <FeatureCard title="DynamicRouter">
      <FeatureDynamicRouter />
    </FeatureCard>

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

    <!-- <FeatureCard  title="File">
      <FeatureFile />
    </FeatureCard> -->

    <FeatureCard title="ImageUploadPreview">
      <FeatureImageUploadPreview />
    </FeatureCard>

    <FeatureCard title="MultipleSelect">
      <FeatureMultipleSelect />
    </FeatureCard>

    <FeatureCard title="GithubEventTimeLine">
      <FeatureGithubEventTimeLine />
    </FeatureCard>

    <FeatureCard title="Faker">
      <FeatureFaker />
    </FeatureCard>

    <FeatureCard title="EditData">
      <FeatureEditData />
    </FeatureCard>

    <FeatureCard title="TTS">
      <FeatureTTS />
    </FeatureCard>

    <FeatureCard title="GradientChart">
      <FeatureGradientChart />
    </FeatureCard>

    <FeatureCard title="FormItem">
      <FeatureFormItem />
    </FeatureCard>

    <FeatureCard title="AutoAnimation">
      <FeatureAutoAnimation />
    </FeatureCard>

    <FeatureCard title="DynamicTableHeader">
      <FeatureDynamicTableHeader />
    </FeatureCard>
  </v-container>
</template>

<style scoped lang="scss"></style>
