<script setup lang="ts">
import MainSidebar from "@/components/navigation/MainSidebar.vue";
import MainAppbar from "@/components/toolbar/MainAppbar.vue";
// import GlobalLoading from "@/components/GlobalLoading.vue";
import ToolBox from "@/components/Toolbox.vue";
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
const customizeTheme = useCustomizeThemeStore();
</script>

<template>
  <div>
    <!-- ---------------------------------------------- -->
    <!---Main Sidebar -->
    <!-- ---------------------------------------------- -->
    <MainSidebar />
    <!-- ---------------------------------------------- -->
    <!---Top AppBar -->
    <!-- ---------------------------------------------- -->
    <MainAppbar />
    <!-- ---------------------------------------------- -->
    <!---MainArea -->
    <!-- ---------------------------------------------- -->
    <perfect-scrollbar>
      <v-main
        class="main-area"
        v-touch="{
          left: () => (customizeTheme.mainSidebar = false),
          right: () => (customizeTheme.mainSidebar = true),
        }"
      >
        <!-- <GlobalLoading /> -->
        <ToolBox />
        <slot></slot>
      </v-main>
    </perfect-scrollbar>
  </div>
</template>

<style scoped>
.scrollnav {
  height: calc(100vh - 326px);
}

.main-area {
  height: calc(100vh-64px);
}
</style>
