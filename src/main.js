/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

import router from "./router";

const app = createApp(App);

// 全局方法挂载
// app.config.globalProperties.run = "run";
app.provide("userName", "yjk");

// RegisterPlugins
registerPlugins(app);

app.use(router);
app.mount("#app");
