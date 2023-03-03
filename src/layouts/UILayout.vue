<script setup lang="ts">
import ToolbarLanguage from "@/components/toolbar/ToolbarLanguage.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import PageTitle from "@/components/PageTitle.vue";
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
import MainSidevar from "@/components/navigation/MainSiderbar.vue";
const customizeTheme = useCustomizeThemeStore();
</script>

<template>
  <div>
    <!-- ---------------------------------------------- -->
    <!---Main Sidebar -->
    <!-- ---------------------------------------------- -->
    <MainSidevar />
    <!-- ---------------------------------------------- -->
    <!---Top AppBar -->
    <!-- ---------------------------------------------- -->
    <v-app-bar>
      <v-app-bar-nav-icon
        @click="customizeTheme.mainSidebar = !customizeTheme.mainSidebar"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>
      <toolbar-language />
    </v-app-bar>
    <!-- ---------------------------------------------- -->
    <!---MainArea -->
    <!-- ---------------------------------------------- -->
    <v-main>
      <v-layout>
        <v-container fluid>
          <PageTitle></PageTitle>
          <Breadcrumb></Breadcrumb>
          <slot></slot>
        </v-container>
      </v-layout>
      <v-footer app></v-footer>
    </v-main>
  </div>
</template>

<style scoped>
.scrollnav {
  height: calc(100vh - 326px);
}
</style>
