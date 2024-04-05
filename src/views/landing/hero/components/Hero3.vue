<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts"></script>

<template>
  <v-card class="my-5" rounded>
    <v-card-title class="card-title">Hero3</v-card-title>
    <v-divider></v-divider>
    <v-row align="center">
      <v-col cols="12" md="6">
        <img class="mx-auto" width="200" src="@/assets/logo2.svg" alt="" />
        <v-card
          color="transparent"
          elevation="0"
          max-width="800"
          class="mx-auto my-10"
        >
          <h1
            style="color: #4a4d6d"
            class="font-weight-black text-h3 text-lg-h2 text-xl-h1"
          >
            We organize chaotic
            <span class="text-primary">internet</span>
          </h1>
          <h2 class="text-h6 text-secondary mt-4 mx-auto">
            Stack is a Spatial Browser for Mindful Online Living
          </h2>
        </v-card>
        <div class="text-center">
          <v-btn size="x-large" class="text-white" color="primary"
            >Get Stack</v-btn
          >
        </div>
      </v-col>
      <v-col cols="0" md="6">
        <v-card class="h-full">
          <v-img
            cover
            height="100%"
            src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss"></style>
