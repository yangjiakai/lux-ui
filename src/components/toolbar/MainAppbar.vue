<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useCustomizeThemeStore } from "@/stores/customizeTheme";

const customizeTheme = useCustomizeThemeStore();
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon
      @click="customizeTheme.mainSidebar = !customizeTheme.mainSidebar"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Vuetify</v-toolbar-title>

    <v-spacer></v-spacer>
    <toolbar-language />
  </v-app-bar>
</template>

<style scoped lang="scss"></style>
