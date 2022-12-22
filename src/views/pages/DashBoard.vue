<template>
  <v-layout>
    <v-navigation-drawer
      width="200"
      color="grey-darken-2"
      permanent
      elevation="6"
    ></v-navigation-drawer>
    <!-- <v-navigation-drawer
      width="150"
      color="grey-darken-1"
      permanent
    ></v-navigation-drawer> -->
    <v-app-bar height="48" color="red" elevation="0" :order="order"></v-app-bar>
    <v-navigation-drawer
      location="right"
      width="150"
      color="grey-lighten-1"
      permanent
    ></v-navigation-drawer>
    <v-app-bar
      location="bottom"
      height="48"
      color="grey-lighten-2"
      elevation="0"
    ></v-app-bar>
    <v-main>
      <v-card elevation="0" height="400px">
        <v-icon icon="mdi-home" />
      </v-card>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import router, { constantRoutes, dynamicRoutes } from "@/router";
console.log(router);
console.log(constantRoutes);

const order = ref(1);
</script>
