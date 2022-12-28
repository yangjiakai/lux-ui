<template>
  <v-app id="app">
    <component :is="currentLayout" v-if="isRouterLoaded">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component"> </component>
        </transition>
      </router-view>
    </component>
    <!-- <component :is="currentLayout"  v-if="isRouterLoaded"></component> -->
    <v-btn
      prepend-icon="mdi-cloud-upload"
      class="goHome"
      to="/"
      color="rgba(0,0,0,.2)"
    >
      回到首页</v-btn
    >
  </v-app>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import defaultLayout from "@/layouts/DefaultLayout";
import landingLayout from "@/layouts/LandingLayout";
import simpleLayout from "@/layouts/SimpleLayout";
import authLayout from "@/layouts/AuthLayout";

const route = useRoute();

const isRouterLoaded = computed(() => {
  if (route.name !== null) return true;
  return false;
});

const currentLayout = computed(() => {
  if (route.meta.layout === "auth") {
    return authLayout;
  } else if (route.meta.layout === "landing") {
    return landingLayout;
  } else if (route.meta.layout === "simple") {
    return simpleLayout;
  } else {
    return defaultLayout;
  }
});
</script>

<style scoped>
#app {
  font-family: "Quicksand", sans-serif;
}

a {
  text-decoration: none;
}

.goHome {
  position: fixed;
  right: 0;
  bottom: 5%;
}

/**
 * Transition animation between pages
 */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
