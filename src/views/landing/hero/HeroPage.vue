<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import Hero1 from "./components/Hero1.vue";
import Hero2 from "./components/Hero2.vue";
import Hero3 from "./components/Hero3.vue";
import Hero4 from "./components/Hero4.vue";
const mode = ref("");
const search = ref("");
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Top Toolbar -->
  <!-- ---------------------------------------------- -->
  <v-toolbar height="100" color="white">
    <v-toolbar-title class="text-h5 font-weight-bold">
      <!-- <v-icon class="mr-2">mdi-account</v-icon> -->
      <span>Hero</span>
      <v-chip class="ma-2" color="primary" text-color="white">
        9 Components
      </v-chip>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
  <Hero1 />
  <Hero2 />
  <Hero3 />
  <Hero4 />
</template>

<style lang="scss">
.landing-warpper {
  border: 2px dashed #aaa;
}
</style>
