/**
 * main.js
 *
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { VueMasonryPlugin } from "vue-masonry";
import MasonryWall from "@yeger/vue-masonry-wall";
import VueVirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import VueApexCharts from "vue3-apexcharts";
import piniaPersist from "pinia-plugin-persist";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "@/styles/main.scss";
import { registerPlugins } from "@/plugins";
import router from "./router";
import i18n from "./plugins/i18n";

const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App);

// RegisterPlugins
registerPlugins(app);

app.use(router);
app.use(PerfectScrollbar);
app.use(VueMasonryPlugin);
app.use(MasonryWall);
app.use(VueVirtualScroller);
app.use(VueApexCharts);
app.use(pinia);
app.use(i18n);
app.mount("#app");
