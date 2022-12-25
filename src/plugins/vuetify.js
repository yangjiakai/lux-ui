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
          primary: "#0096C7",
          secondary: "#5CBBF6",
        },
      },
    },
  },
  locale: {
    locale: locale,
    fallback: fallbackLocale,
    messages: messages,
  },
});
