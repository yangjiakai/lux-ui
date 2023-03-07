<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import Newsletter1 from "./components/Newsletter1.vue";
import Newsletter2 from "./components/Newsletter2.vue";
import Newsletter3 from "./components/Newsletter3.vue";
import Newsletter4 from "./components/Newsletter4.vue";
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
      <span>Newsletter</span>
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
  <Newsletter1 />
  <Newsletter2 />
  <Newsletter3 />
  <Newsletter4 />
</template>

<style lang="scss"></style>
