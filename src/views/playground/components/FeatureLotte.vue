<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
import AnimationSearch1 from "@/components/animations/AnimationSearch1.vue";
import AnimationSearch2 from "@/components/animations/AnimationSearch2.vue";
</script>

<template>
  <v-row>
    <v-col cols="12" md="3">
      <Vue3Lottie
        animationLink="https://assets7.lottiefiles.com/packages/lf20_x62chJ.json"
        :height="200"
        :width="200"
      />
    </v-col>
    <v-col cols="12" md="3">
      <Vue3Lottie
        animationLink="https://assets2.lottiefiles.com/packages/lf20_cr9slsdh.json"
        :height="200"
        :width="200"
      />
    </v-col>

    <v-col cols="12" md="3">
      <AnimationSearch1 :size="200" />
    </v-col>
    <v-col cols="12" md="3">
      <AnimationSearch2 :size="200" />
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
