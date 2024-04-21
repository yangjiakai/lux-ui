/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
// Composables
import { createVuetify } from "vuetify";
import type { ThemeDefinition } from "vuetify";

import * as directives from "vuetify/directives";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { useI18n } from "vue-i18n";
import i18n from "@/plugins/i18n";


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const light = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#705CF6',
    secondary: '#03DAC6',
    error: '#FC3C56',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',

    'grey-50': '#FAFAFA',
    'grey-100': '#F5F5F5',
    'grey-200': '#EEEEEE',
    'grey-300': '#E0E0E0',
    'grey-400': '#BDBDBD',
    'grey-500': '#9E9E9E',
    'grey-600': '#757575',
    'grey-700': '#616161',
    'grey-800': '#424242',
    'grey-900': '#212121',
  },
  variables: {
    'code-color': '#d400ff',
    'overlay-scrim-background': '#4C4E64',
    'tooltip-background': '#4A5072',
    'overlay-scrim-opacity': 0.5,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.06,
    'activated-opacity': 0.16,
    'pressed-opacity': 0.14,
    'dragged-opacity': 0.1,
    'disabled-opacity': 0.42,
    'border-color': '#2F2B3D',
    'border-opacity': 0.16,
    'high-emphasis-opacity': 0.78,
    'medium-emphasis-opacity': 0.68,
    'switch-opacity': 0.2,
    'switch-disabled-track-opacity': 0.3,
    'switch-disabled-thumb-opacity': 0.4,
    'switch-checked-disabled-opacity': 0.3,

    // Shadows
    'shadow-key-umbra-color': '#2F2B3D',
  },
}

const dark = {
  dark: true,
  colors: {
    primary: '#705CF6',
    secondary: '#A8AAAE',

    success: '#28C76F',
    info: '#00CFE8',
    warning: '#FF9F43',
    error: '#EA5455',

    // dark theme bg colors
    background: '#22272E',
    surface: '#2B323B',

    'grey-50': '#26293A',
    'grey-100': '#2F3349',
    'grey-200': '#26293A',
    'grey-300': '#4A5072',
    'grey-400': '#5E6692',
    'grey-500': '#7983BB',
    'grey-600': '#AAB3DE',
    'grey-700': '#B6BEE3',
    'grey-800': '#CFD3EC',
    'grey-900': '#E7E9F6',
  },

  variables: {
    'code-color': '#d400ff',
    'overlay-scrim-background': '#101121',
    'tooltip-background': '#5E6692',
    'overlay-scrim-opacity': 0.6,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.06,
    'activated-opacity': 0.16,
    'pressed-opacity': 0.14,
    'dragged-opacity': 0.1,
    'disabled-opacity': 0.42,
    'border-color': '#D0D4F1',
    'border-opacity': 0.16,
    'high-emphasis-opacity': 0.78,
    'medium-emphasis-opacity': 0.68,
    'switch-opacity': 0.4,
    'switch-disabled-track-opacity': 0.4,
    'switch-disabled-thumb-opacity': 0.8,
    'switch-checked-disabled-opacity': 0.3,

    // Shadows
    'shadow-key-umbra-color': '#0F1422',
  },
}

export default createVuetify({

  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light,
      dark
    },
  },
  defaults: {
    VBtn: {
      rounded: "md",
    },
    VCheckbox: {
      color: "primary",
    },
    VCard: {
      rounded: "lg",
    },
  },
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
});
