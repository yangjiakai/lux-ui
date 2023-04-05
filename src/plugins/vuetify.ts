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
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { useI18n } from "vue-i18n";
import i18n from "@/plugins/i18n";
import * as labs from "vuetify/labs/components";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    ...labs,
  },
  theme: {
    themes: {
      light: {
        colors: {
          surface: "#fff",
          primary: "#344767",
          secondary: "#a0b9c8",
          accent: "#048ba8",
          error: "#ef476f",
          info: "#2196F3",
          success: "#06d6a0",
          warning: "#ffd166",

          // primary: "#344767",
          // secondary: "#fcfbff",
          // accent: "#6386e1",
          // content: "#333333",
          // background: "#F8F9FA",
          // error: "#ef476f",
          // info: "#2196F3",
          // success: "#06d6a0",
          // warning: "#ffd166",
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
    VTable: {
      elevation: 1,
    },
    VDataTable: {
      fixedHeader: true,
      noDataText: "Results not found",
    },
  },
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
});
