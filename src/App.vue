<template>
  <v-app id="app" :theme="customizeTheme.darkTheme ? 'dark' : 'light'">
    <component :is="currentLayout" v-if="isRouterLoaded">
      <router-view> </router-view>
    </component>
    <CustomizationMenu />
    <BackToTop />
    <Snackbar />
  </v-app>
</template>

<script setup lang="ts">
import UILayout from "@/layouts/UILayout.vue";
import LandingLayout from "@/layouts/LandingLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import CustomizationMenu from "@/components/CustomizationMenu.vue";
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
import BackToTop from "@/components/common/BackToTop.vue";
import Snackbar from "@/components/common/Snackbar.vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { useAuthStore } from "@/stores/authStore";
const authStore = useAuthStore();

const customizeTheme = useCustomizeThemeStore();
const route = useRoute();

const isRouterLoaded = computed(() => {
  if (route.name !== null) return true;
  return false;
});

const layouts = {
  default: DefaultLayout,
  ui: UILayout,
  landing: LandingLayout,
  auth: AuthLayout,
};

type LayoutName = "default" | "ui" | "landing" | "auth" | "error";

const currentLayout = computed(() => {
  const layoutName = route.meta.layout as LayoutName;
  if (!layoutName) {
    return DefaultLayout;
  }
  return layouts[layoutName];
});

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      authStore.setLoggedIn(true);
    } else {
      authStore.setLoggedIn(false);
    }
  });
});
</script>

<style scoped></style>
