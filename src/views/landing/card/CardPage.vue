<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import Card1 from "./components/Card1.vue";
import Card2 from "./components/Card2.vue";
import Card3 from "./components/Card3.vue";
import Card4 from "./components/Card4.vue";
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
      <span>Card</span>
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
  <Card1 />
  <Card2 />
  <Card3 />
  <Card4 />
</template>

<style lang="scss"></style>
