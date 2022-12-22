<template>
  <v-menu scroll-y>
    <template v-slot:activator="{ props }">
      <v-btn width="100" color="primary" class="ma-2" v-bind="props">
        <flag-icon :flag="currentLocale.flag" class="mr-1"></flag-icon>
        <span class="text-caption">{{ currentLocale.label }}</span>
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

        <v-list-item-title class="text-caption">
          {{ locale.label }}</v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script setup>
import { computed } from "vue";
import FlagIcon from "../common/FlagIcon";
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
