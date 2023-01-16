<script setup lang="ts">
import configs from "@/configs";
import MainMenu from "@/components/navigation/MainMenu.vue";
import ToolbarLanguage from "@/components/toolbar/ToolbarLanguage.vue";
import PerfectScrollbar from "perfect-scrollbar";
import Breadcrumb from "@/components/Breadcrumb.vue";
import PageTitle from "@/components/PageTitle.vue";
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
import { Icon } from "@iconify/vue";
const customizeTheme = useCustomizeThemeStore();
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

<template>
  <div>
    <!-- Navigation menu info -->
    <v-navigation-drawer app v-model="drawer" elevation="1" id="mainMenu">
      <template v-slot:prepend>
        <div class="pa-4">
          <div
            class="text-h5 text-uppercase font-weight-bold d-flex align-center"
          >
            <img width="30" src="@/assets/logo.png" alt="" />
            <span class="ml-2"> {{ product.name }}</span>
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
        <v-card theme="dark" height="225" class="pa-3" variant="text">
          <v-card
            class="d-flex flex-column gradient pa-2"
            :class="customizeTheme.primaryColor"
            height="200"
          >
            <v-card-title>
              <v-btn
                class="mr-2"
                size="40"
                color="white"
                :class="`text-${customizeTheme.primaryColor}`"
                icon
              >
                <Icon width="30" icon="line-md:moon-filled-loop" />
              </v-btn>
              Yang J.K.
            </v-card-title>
            <v-card-subtitle> </v-card-subtitle>
            <v-card-text>
              <div><b>Github:</b></div>
              <div>github.com/yangjiakai</div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="white"
                block
                prepend-icon="mdi-thumb-up-outline"
                variant="elevated"
                @click="openGithubSite"
              >
                Star-Me
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </template>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>
      <toolbar-language />
    </v-app-bar>
    <v-main>
      <v-layout>
        <v-container fluid>
          <PageTitle></PageTitle>
          <Breadcrumb></Breadcrumb>
          <slot></slot>
        </v-container>
      </v-layout>
      <v-footer app></v-footer>
    </v-main>
  </div>
</template>

<style scoped>
:deep(::-webkit-scrollbar-track) {
  -webkit-box-shadow: inset 0 0 6px #5d5d5d;
  background-color: #b9b9b9;
}
:deep(::-webkit-scrollbar) {
  width: 5px;
  height: 5px;
}
:deep(::-webkit-scrollbar-thumb) {
  -webkit-box-shadow: inset 0 0 6px #424242;
  background-color: #424242;
}
</style>
