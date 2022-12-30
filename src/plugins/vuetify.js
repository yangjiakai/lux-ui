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
          primary: "#fff",
          accent: "#6386e1",
          content: "#333333",
        },
      },
      dark: {
        colors: {
          background: "#1d1f33",
          primary: "#2B2B49",
          surface: "#44426B",
          "primary-darken-1": "#1d1f33",
          "primary-lighten-1": "#44416d",
          secondary: "#5CBBF6",
          title: "#C3C1D5",
          content: "#8381a7",
          accent: "#6386e1",
          error: "#e47171",
          info: "#24a6c5",
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
