<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import EmailMenu from "@/views/app/email/components/EmailMenu.vue";
</script>

<template>
  <v-container class="app-container">
    <!-- ---------------------------------------------- -->
    <!-- Side Bar -->
    <!-- ---------------------------------------------- -->
    <div class="d-none d-md-block sidebar">
      <EmailMenu />
    </div>

    <!-- ---------------------------------------------- -->
    <!--  Mail RouterView-->
    <!-- ---------------------------------------------- -->
    <div class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.app-container {
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 13px;

  .sidebar {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    background-color: #fff;
    margin-right: 20px;
  }

  .main {
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
}
</style>
