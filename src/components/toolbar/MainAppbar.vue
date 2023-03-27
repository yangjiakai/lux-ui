<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
import ToolbarLanguage from "@/components/toolbar/ToolbarLanguage.vue";
const customizeTheme = useCustomizeThemeStore();
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon
      @click="customizeTheme.mainSidebar = !customizeTheme.mainSidebar"
    ></v-app-bar-nav-icon>
    <v-toolbar-title></v-toolbar-title>

    <v-spacer></v-spacer>
    <v-text-field
      color="primary"
      variant="outlined"
      prepend-inner-icon="mdi-magnify"
      hide-details
      placeholder="Search"
    ></v-text-field>
    <v-btn class="text-none" stacked>
      <v-badge dot color="success">
        <v-icon>mdi-home-outline</v-icon>
      </v-badge>
    </v-btn>

    <v-btn class="text-none" stacked>
      <v-icon>mdi-account-multiple-outline</v-icon>
    </v-btn>

    <v-btn class="text-none" stacked>
      <v-badge content="9+" color="error">
        <v-icon>mdi-store-outline</v-icon>
      </v-badge>
    </v-btn>

    <v-btn class="text-none" stacked>
      <v-badge content="2" color="error">
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>
    </v-btn>

    <v-avatar class="mx-5">
      <v-img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrAiMevuwrbU9o0Ck2paVf4ufHUDb2dU48MEDrAlrQw&s"
      ></v-img>
    </v-avatar>
    <toolbar-language />
  </v-app-bar>
</template>

<style scoped lang="scss"></style>
