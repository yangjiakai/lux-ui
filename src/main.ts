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
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';
import "@/styles/main.scss";
import router from "./router";
import i18n from "./plugins/i18n";
import Vue3Lottie from "vue3-lottie";
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'


const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App);

app.use(router);
app.use(PerfectScrollbarPlugin);
app.use(MasonryWall);
app.use(VueVirtualScroller);
app.use(VueApexCharts);
app.use(pinia);
app.use(i18n);
app.use(Vue3Lottie, { name: "LottieAnimation" });
app.use(autoAnimatePlugin);

app.use(vuetify);
app.mount("#app");
