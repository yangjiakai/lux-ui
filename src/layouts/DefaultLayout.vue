<template>
  <div>
    <!-- Navigation menu info -->
    <v-navigation-drawer app v-model="drawer" elevation="1" id="mainMenu">
      <template v-slot:prepend>
        <div class="pa-4">
          <div
            class="text-subtitle-1 font-weight-bold text-primary text-uppercase"
          >
            {{ product.name }}
          </div>
          <div class="text-overline text-grey">
            {{ product.version }}
          </div>
        </div>
      </template>
      <v-divider></v-divider>
      <!-- Navigation menu -->
      <main-menu :menu="navigation.menu"></main-menu>
      <!-- Navigation menu footer -->
      <template v-slot:append>
        <v-card elevation="4">
          <v-card-title primary-title> J.K. Inc </v-card-title>
          <v-card-subtitle>github.com/yangjiakai</v-card-subtitle>
          <v-card-actions>
            <v-btn
              prepend-icon="mdi-cloud-upload"
              color="primary"
              block
              variant="elevated"
              @click="openGithubSite"
            >
              Star-Me
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>
      <toolbar-language />
    </v-app-bar>
    <v-main>
      <v-container class="fill-height">
        <v-layout>
          <v-container>
            <PageTitle></PageTitle>
            <Breadcrumb></Breadcrumb>
            <slot></slot>
          </v-container>
        </v-layout>
      </v-container>
      <v-footer app></v-footer>
    </v-main>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import configs from "@/configs";
import MainMenu from "@/components/navigation/MainMenu";
import ToolbarLanguage from "../components/toolbar/ToolbarLanguage";
import PerfectScrollbar from "perfect-scrollbar";
import Breadcrumb from "@/components/Breadcrumb.vue";
import PageTitle from "@/components/PageTitle.vue";

const navigation = ref(configs.navigation);
const product = ref(configs.product);
const drawer = ref(true);

const openGithubSite = () => {
  window.open("https://github.com/yangjiakai", "_blank");
};

// const mainMenu = ref(null);
const scrollbar = ref(null);
onMounted(() => {
  const container = document.querySelector("#mainMenu");
  scrollbar.value = new PerfectScrollbar(container);
});

onBeforeUnmount(() => {});
</script>

<style scoped>
::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>
