<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import AnimationSearch1 from "@/components/animations/AnimationSearch1.vue";
import AnimationSearch2 from "@/components/animations/AnimationSearch2.vue";
import AnimationFile1 from "@/components/animations/AnimationFile1.vue";
import Animation404 from "@/components/animations/Animation404.vue";
</script>

<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col cols="12" md="3">
          <AnimationSearch1 :size="200" />
        </v-col>
        <v-col cols="12" md="3">
          <AnimationSearch2 :size="200" />
        </v-col>

        <v-col cols="12" md="3">
          <AnimationFile1 :size="200" />
        </v-col>
        <v-col cols="12" md="3">
          <Animation404 :size="200" />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss"></style>
