<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts"></script>

<template>
  <div class="d-flex flex-wrap">
    <v-card
      class="ma-5"
      width="200"
      height="200"
      v-for="i in 24"
      :elevation="i"
    >
    </v-card>
  </div>
</template>

<style scoped lang="scss"></style>
