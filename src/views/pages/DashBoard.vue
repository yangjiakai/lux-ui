<template>
  <div class=""></div>
  <v-container>
    <v-card> sad </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import router, { constantRoutes, dynamicRoutes } from "@/router";
console.log(router);
console.log(constantRoutes);

const order = ref(1);
</script>
