<template>
  <v-sheet class="bg text-center error-page w-full pa-3">
    <v-btn
      to="/"
      class="text-h3 text-white"
      x-large
      color="rgba(0,0,0,.7)"
      width="400"
      height="100"
      position="absolute"
      location="center center"
      >Send me Back</v-btn
    >
  </v-sheet>
</template>

<style scoped>
.bg {
  background: url("@/assets/images/404.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
