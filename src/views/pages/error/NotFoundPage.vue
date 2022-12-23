<template>
  <v-card
    class="text-center w-full error-page pa-3"
    height="100vh"
    color="grey"
  >
    <v-img
      src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-13617.jpg?w=2000&t=st=1671820416~exp=1671821016~hmac=bc46b386c1ebf9bb390674484f5138b17424d0f4187a3e249b1155fa74db5211"
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
