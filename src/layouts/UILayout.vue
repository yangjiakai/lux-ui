<script setup lang="ts">
import Breadcrumb from "@/components/Breadcrumb.vue";
import PageTitle from "@/components/PageTitle.vue";
import MainSidevar from "@/components/navigation/MainSidebar.vue";
import MainAppbar from "@/components/toolbar/MainAppbar.vue";
import ToolBox from "@/components/Toolbox.vue";

// import GlobalLoading from "@/components/GlobalLoading.vue";
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
    <v-main class="main-bg">
      <!-- <GlobalLoading /> -->

      <v-container class="pa-0 pa-sm-4" fluid>
        <div class="pa-4 pa-sm-0">
          <PageTitle></PageTitle>
          <Breadcrumb></Breadcrumb>
        </div>

        <ToolBox />
        <slot></slot>
      </v-container>
    </v-main>
  </div>
</template>

<style scoped>
.scrollnav {
  height: calc(100vh - 326px);
}

.main-bg {
  min-height: calc(100vh - 64px);
}
</style>
