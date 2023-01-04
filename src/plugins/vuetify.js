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
          primary: "#2B2B49",
          accent: "#6386e1",
          content: "#333333",
          background: "#F9F9FA",
          secondary: "#a0b9c8",
          error: "#ef476f",
          info: "#2196F3",
          success: "#06d6a0",
          warning: "#ffd166",
          content: "#8381a7",
          "primary-darken-1": "#1d1f33",
          "primary-lighten-1": "#303052",
        },
      },
      dark: {
        colors: {
          primary: "#2B2B49",
          "primary-darken-1": "#1d1f33",
          "primary-lighten-1": "#303052",
          surface: "#282843",
          secondary: "#5CBBF6",
          title: "#C3C1D5",
          content: "#8381a7",
          accent: "#6386e1",
          error: "#e47171",
          info: "#24a6c5",
          background: "#1d1f33",
        },
      },
    },
    variables: {},
  },
  locale: {
    locale: locale,
    fallback: fallbackLocale,
    messages: messages,
  },
});
