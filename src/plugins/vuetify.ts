/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import config from "@/configs";

// Composables
import { createVuetify } from "vuetify";

const { locale, availableLocales, fallbackLocale } = config.locales;

const messages = {};

availableLocales.forEach((l) => {
  messages[l.code] = l.messages;
});

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          // primary: "#344767",
          // secondary: "#fcfbff",
          // "secondary-darken-1": "#b08be6",
          // "secondary-lighten-1": "#fff",
          // accent: "#6386e1",
          // content: "#333333",
          // background: "#F8F9FA",
          // error: "#ef476f",
          // info: "#2196F3",
          // success: "#06d6a0",
          // warning: "#ffd166",
          background: "#ffffff",
          surface: "#fff",
          primary: "#0096c7",
          secondary: "#a0b9c8",
          accent: "#048ba8",
          error: "#ef476f",
          info: "#2196F3",
          success: "#06d6a0",
          warning: "#ffd166",
        },
      },
      dark: {
        colors: {
          primary: "#0096c7",
          secondary: "#2B2B49",
          "secondary-darken-1": "#1d1f33",
          "secondary-lighten-1": "#303052",
          surface: "#282843",
          title: "#C3C1D5",
          content: "#8381a7",
          accent: "#6386e1",
          error: "#e47171",
          info: "#24a6c5",
          background: "#1d1f33",
        },
      },
    },
  },
  defaults: {
    VBtn: {
      rounded: "md",
      flat: true,
      fontWeight: "400",
      letterSpacing: "0",
    },
    VCard: {
      elevation: 1,
    },
    VSheet: {
      elevation: 1,
    },
    VAppBar: {
      elevation: 1,
    },
    VNavigationDrawer: {
      elevation: 1,
    },
  },
  locale: {
    locale: locale,
    fallback: fallbackLocale,
    messages: messages,
  },
});
