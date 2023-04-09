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
  <v-card height="500">
    <v-btn color="success">text</v-btn>
    <v-btn color="error">text</v-btn>
    <v-btn color="info">text</v-btn>
    <v-btn color="teal">text</v-btn>
    <v-btn color="blue">text</v-btn>
    <v-btn color="#003">text</v-btn>
    <v-chip color="success">text</v-chip>
    <v-chip color="error">text</v-chip>
    <v-chip color="info">text</v-chip>
    <v-chip color="teal">text</v-chip>
    <v-chip color="blue">text</v-chip>
    <v-chip color="#003">text</v-chip>
  </v-card>
</template>

<style scoped lang="scss"></style>
