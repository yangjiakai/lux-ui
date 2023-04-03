<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import Logos1 from "./components/Logos1.vue";
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
          1 Components
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
  </div>
</template>

<style lang="scss"></style>
