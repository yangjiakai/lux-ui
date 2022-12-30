<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn to="/" color="dark-grey">Home</v-btn>
    </v-app-bar>
    <v-main app>
      <slot></slot>
    </v-main>
  </div>
</template>
