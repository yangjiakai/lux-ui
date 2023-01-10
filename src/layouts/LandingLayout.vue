<template>
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

<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();

const currentTheme = computed(() => {
  return theme.global.current.value.dark ? "天黑了" : "天亮了";
});

// onMounted(() => {
//   console.log(theme.global.name.value);
// });

// const toggleTheme = () => {
//   theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
//   currentTheme.value = theme.global.name.value;
// };
</script>
