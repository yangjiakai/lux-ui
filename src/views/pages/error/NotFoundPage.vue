<template>
  <v-card
    class="text-center w-full error-page pa-3"
    height="100vh"
    color="grey"
  >
    <v-img
      src="/images/illustrations/404-illustration.svg"
      max-height="400"
      contain
    />
    <div class="text-h1 mt-10">404</div>
    <div class="mt-3 mb-6">
      Sorry we can't seem to find the page you're looking for.
    </div>
    <v-text-field solo placeholder="Search website" large></v-text-field>
    <v-btn to="/" block large color="primary">Send me Back</v-btn>
  </v-card>
</template>

<style></style>
