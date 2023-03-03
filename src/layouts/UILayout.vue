<script setup lang="ts">
import configs from "@/configs";
import MainMenu from "@/components/navigation/MainMenu.vue";
import ToolbarLanguage from "@/components/toolbar/ToolbarLanguage.vue";
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
</script>

<template>
  <div>
    <!-- Navigation menu info -->
    <v-navigation-drawer v-model="drawer" elevation="1" id="mainMenu">
      <!-- ---------------------------------------------- -->
      <!---Top Area -->
      <!-- ---------------------------------------------- -->
      <template v-if="!customizeTheme.miniSidebar" v-slot:prepend>
        <v-card height="100">
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
        </v-card>
      </template>
      <v-divider></v-divider>
      <!-- ---------------------------------------------- -->
      <!---Nav List -->
      <!-- ---------------------------------------------- -->
      <perfect-scrollbar class="scrollnav">
        <main-menu :menu="navigation.menu"></main-menu>
      </perfect-scrollbar>
      <!-- ---------------------------------------------- -->
      <!---Bottom Area -->
      <!-- ---------------------------------------------- -->
      <template v-if="!customizeTheme.miniSidebar" v-slot:append>
        <v-card theme="dark" height="225" class="pa-3" variant="text">
          <v-card
            class="d-flex flex-column gradient pa-2"
            :class="customizeTheme.primaryColor.colorName"
            height="200"
          >
            <v-card-title>
              <v-btn
                class="mr-2"
                size="40"
                color="white"
                :class="`text-${customizeTheme.primaryColor.colorName}`"
                icon
              >
                <Icon width="30" icon="line-md:github-loop" />
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
.scrollnav {
  height: calc(100vh - 326px);
}
</style>
