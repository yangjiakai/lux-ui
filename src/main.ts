/**
 * main.js
 *
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import MasonryWall from "@yeger/vue-masonry-wall";
import VueVirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import VueApexCharts from "vue3-apexcharts";
import piniaPersist from "pinia-plugin-persist";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "@/styles/main.scss";
import i18n from "./plugins/i18n";
import "vue3-lottie/dist/style.css";
import Vue3Lottie from "vue3-lottie";

const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App);

app.use(vuetify);
app.use(pinia);
app.use(i18n);

import router from "./router";
app.use(router);

app.use(PerfectScrollbar);
app.use(MasonryWall);
app.use(VueVirtualScroller);
app.use(VueApexCharts);
app.use(Vue3Lottie, { name: "LottieAnimation" });
app.mount("#app");
