<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-switch
        v-model="theme.global.name"
        hide-details
        true-value="dark"
        false-value="light"
        :label="`Theme: ${currentTheme}`"
      ></v-switch>
      <v-btn to="/" color="dark-grey">Home</v-btn>
    </v-app-bar>
    <v-main app>
      <slot></slot>
    </v-main>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();

const currentTheme = computed(() => {
  console.log(theme.global.name.value);
  return theme.global.name.value;
});

// onMounted(() => {
//   console.log(theme.global.name.value);
// });

// const toggleTheme = () => {
//   theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
//   currentTheme.value = theme.global.name.value;
// };
</script>
