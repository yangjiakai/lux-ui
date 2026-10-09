/// <reference types="vitest/config" />
// Plugins
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

import AutoImport from "unplugin-auto-import/vite";

// Utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: { configFile: "src/styles/settings.scss" },
    }),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
    }),
  ],
  define: { "process.env": {} },
  // Pre-bundle Vuetify overlay modules together so overlays opened inside a dialog
  // share one z-index stack in dev mode (Vuetify 4 upgrade guide)
  optimizeDeps: {
    include: [
      "vuetify/components/VOverlay",
      "vuetify/components/VDialog",
      "vuetify/components/VMenu",
      "vuetify/components/VSelect",
      "vuetify/components/VTooltip",
    ],
  },
  test: {
    globals: true,
    environment: "happy-dom",
  },
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@data": fileURLToPath(new URL("./src/data", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
    watch: {
      usePolling: true,
    },
    proxy: {
      "/sdApi": {
        target: "http://me.yunrobot.cn:7860",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sdApi/, ""),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: { charset: false },
      css: { charset: false },
    },
  },
});
