/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";
import "./styles/main.scss";

// Composables
import { createApp } from "vue";
import { VueMasonryPlugin } from "vue-masonry";
import MasonryWall from "@yeger/vue-masonry-wall";
import VueVirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

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
app.use(VueMasonryPlugin);
app.use(MasonryWall);
app.use(VueVirtualScroller);
app.mount("#app");
