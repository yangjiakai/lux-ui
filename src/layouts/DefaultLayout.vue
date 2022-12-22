<template>
  <div>
    <!-- Navigation menu info -->

    <v-navigation-drawer app v-model="drawer" elevation="1">
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      ></v-list-item>
      <!-- Navigation menu -->
      <main-menu :menu="navigation.menu"></main-menu>
      <!-- Navigation menu footer -->
      <v-card> footer </v-card>
    </v-navigation-drawer>

    <v-app-bar app></v-app-bar>
    <v-main>
      <v-container class="fill-height">
        <v-layout>
          <slot></slot>
        </v-layout>
      </v-container>
      <v-footer app></v-footer>
    </v-main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import configs from "@/configs";
import MainMenu from "@/components/navigation/MainMenu";

const navigation = ref(configs.navigation);
const drawer = ref(true);
</script>
