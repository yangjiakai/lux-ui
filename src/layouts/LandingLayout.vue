<!-- <template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-switch
          v-model="theme.global.name"
          hide-details
          true-value="dark"
          false-value="light"
          :label="`Theme: ${currentTheme}`"
          inset
        ></v-switch>
      </div>

      <v-btn to="/" color="dark-grey">Home</v-btn>
    </v-app-bar>
    <v-main app>
      <slot></slot>
    </v-main>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();

const currentTheme = computed(() => {
  return theme.global.current.value.dark ? "天黑了" : "天亮了";
});
</script> -->
<script setup lang="ts">
import Breadcrumb from "@/components/Breadcrumb.vue";
import PageTitle from "@/components/PageTitle.vue";
import MainSidevar from "@/components/navigation/MainSiderbar.vue";
import MainAppbar from "@/components/toolbar/MainAppbar.vue";
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
    <perfect-scrollbar>
      <v-main class="main-area">
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
  height: 100vh;
  /* background-color: #ccc; */
}
</style>
