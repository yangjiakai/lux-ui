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
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Top Toolbar -->
  <!-- ---------------------------------------------- -->
  <v-toolbar height="100" color="white">
    <div class="ml-5">
      <h3 class="text-h5 font-weight-bold">
        Logos
        <v-chip size="small" class="ma-2" color="primary" text-color="white">
          4 Components
        </v-chip>
      </h3>
    </div>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
  <div>
    <Logos1 />
    <!-- <Logos2 />
    <Logos3 />
    <Logos4 /> -->
  </div>
</template>

<style lang="scss"></style>
