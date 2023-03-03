<script setup lang="ts">
import ToolbarLanguage from "@/components/toolbar/ToolbarLanguage.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import PageTitle from "@/components/PageTitle.vue";
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
import MainSidevar from "@/components/navigation/MainSiderbar.vue";
import MainAppbar from "@/components/toolbar/MainAppbar.vue";
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
    <MainAppbar />
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
