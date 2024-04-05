<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useTheme } from "vuetify";
import { useAppStore } from "../../stores/appStore";
const appStore = useAppStore();

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  appStore.setTheme(theme.global.name.value);
};

const isDark = computed(() => theme.global.current.value.dark);
</script>

<template>
  <v-btn v-if="isDark" @click="toggleTheme" icon>
    <Icon width="30" icon="line-md:moon-filled-loop" />
  </v-btn>

  <v-btn v-else @click="toggleTheme" icon color="white" class="text-red">
    <Icon
      width="30"
      icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
    />
  </v-btn>
</template>

<style scoped lang="scss"></style>
