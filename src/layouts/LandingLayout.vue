<script setup lang="ts">
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
  height: calc(100vh-64px);

  /* background-color: #ccc; */
}
</style>
