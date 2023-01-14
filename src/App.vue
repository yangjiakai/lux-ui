<template>
  <v-app id="app">
    <component :is="currentLayout" v-if="isRouterLoaded">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component"> </component>
        </transition>
      </router-view>
    </component>
    <CustomizationMenu />
    <!-- <component :is="currentLayout"  v-if="isRouterLoaded"></component> -->
  </v-app>
</template>

<script setup lang="ts">
import defaultLayout from "@/layouts/DefaultLayout.vue";
import landingLayout from "@/layouts/LandingLayout.vue";
import simpleLayout from "@/layouts/SimpleLayout.vue";
import authLayout from "@/layouts/AuthLayout.vue";
import CustomizationMenu from "@/components/CustomizationMenu.vue";

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
