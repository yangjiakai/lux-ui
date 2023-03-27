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
    <v-main class="main-bg">
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

.main-bg {
  background-color: #eef1f4;
  min-height: calc(100vh - 64px);
}
</style>
