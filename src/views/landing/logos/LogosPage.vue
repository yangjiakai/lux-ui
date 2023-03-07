<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import Logos1 from "./components/Logos1.vue";
import Logos2 from "./components/Logos2.vue";
import Logos3 from "./components/Logos3.vue";
import Logos4 from "./components/Logos4.vue";
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
      <span>Logos</span>
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
  <Logos1 />
  <Logos2 />
  <Logos3 />
  <Logos4 />
</template>

<style lang="scss"></style>
