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
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Top Toolbar -->
  <!-- ---------------------------------------------- -->
  <v-toolbar height="100" color="white">
    <div class="ml-5">
      <h3 class="text-h5 font-weight-bold">
        Card
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
    <Card1 />
    <Card2 />
    <Card3 />
    <Card4 />
  </div>
</template>

<style lang="scss"></style>
