<template>
  <v-menu scroll-y>
    <template v-slot:activator="{ props }">
      <v-btn width="100" class="ma-2" v-bind="props">
        <flag-icon :flag="currentLocale.flag" class="mr-1"></flag-icon>
        <span class="text-body-2">{{ currentLocale.label }}</span>
      </v-btn>
    </template>
    <v-list nav>
      <v-list-item
        v-for="locale in availableLocaleList"
        :key="locale.code"
        @click="setLocale(locale.code)"
        density="compact"
      >
        <template v-slot:prepend>
          <flag-icon :flag="locale.flag" class="mr-1"></flag-icon>
        </template>

        <v-list-item-title> {{ locale.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script setup lang="ts">
import FlagIcon from "../common/FlagIcon.vue";
import config from "@/configs";

import { useLocale } from "vuetify";
const { current, t } = useLocale();
const { availableLocales } = config.locales;

const availableLocaleList = computed(() => {
  return availableLocales.filter((item) => item.code !== current.value);
});

const currentLocale = computed(() => {
  return availableLocales.filter((item) => item.code === current.value)[0];
});

const setLocale = (locale) => {
  current.value = locale;
};
</script>
