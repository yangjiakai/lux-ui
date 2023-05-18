<template>
  <v-menu scroll-y>
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <!-- <Icon :icon="`twemoji:flag-${currentLocale.name}`" /> -->
        <v-icon color="primary">mdi-translate</v-icon>
      </v-btn>
    </template>
    <v-list elevation="1" nav>
      <v-list-item
        v-for="locale in availableLocaleList"
        :key="locale.code"
        @click="setLocale(locale.code)"
        density="compact"
        :active="locale.code === current"
      >
        <template v-slot:prepend>
          <Icon :icon="`twemoji:flag-${locale.name}`" class="mr-2" />
        </template>

        <v-list-item-title> {{ locale.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script setup lang="ts">
import config from "@/configs";
import { Icon } from "@iconify/vue";
import { useLocale } from "vuetify";
const { current } = useLocale();
const { availableLocales } = config.locales;
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
const customizeTheme = useCustomizeThemeStore();
const availableLocaleList = computed(() => {
  // return availableLocales.filter((item) => item.code !== current.value);
  return availableLocales;
});

// const currentLocale = computed(() => {
//   return availableLocales.filter((item) => item.code === current.value)[0];
// });

onMounted(() => {
  setLocale(customizeTheme.localCode);
});

const setLocale = (locale) => {
  current.value = locale;
  customizeTheme.setLocalCode(locale);
};
</script>
