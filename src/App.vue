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

<script setup>
import defaultLayout from "@/layouts/DefaultLayout";
import landingLayout from "@/layouts/LandingLayout";
import simpleLayout from "@/layouts/SimpleLayout";
import authLayout from "@/layouts/AuthLayout";
import CustomizationMenu from "@/components/CustomizationMenu";

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
