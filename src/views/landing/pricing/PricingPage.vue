<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import Pricing1 from "./components/Pricing1.vue";
import Pricing2 from "./components/Pricing2.vue";
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Top Toolbar -->
  <!-- ---------------------------------------------- -->
  <v-toolbar rounded="lg" height="100" color="primary">
    <div class="ml-5">
      <h3 class="text-h5 font-weight-bold">
        Pricing
        <v-chip size="small" class="ma-2"> 2 Components </v-chip>
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
    <Pricing1 />
    <Pricing2 />
  </div>
</template>

<style lang="scss"></style>
