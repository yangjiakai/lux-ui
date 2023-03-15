<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import FAQ1 from "./components/FAQ1.vue";
import FAQ2 from "./components/FAQ2.vue";
import FAQ3 from "./components/FAQ3.vue";
import FAQ4 from "./components/FAQ4.vue";
const mode = ref("");
const search = ref("");
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Top Toolbar -->
  <!-- ---------------------------------------------- -->
  <v-toolbar height="100" color="white">
    <div class="ml-5">
      <h3 class="text-h5 font-weight-bold">
        FAQ
        <v-chip size="small" class="ma-2" color="primary" text-color="white">
          1 Components
        </v-chip>
      </h3>
    </div>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
  <FAQ1 />
  <!-- <FAQ2 />
  <FAQ3 />
  <FAQ4 /> -->
</template>

<style lang="scss"></style>
