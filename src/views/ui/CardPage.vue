<template>
  <v-container>
    <!-- <Icon class="animate-icon" icon="logos:bamboo" /> -->
    <v-card class="card-container d-flex pa-5">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6" md="4" lg="3" v-for="i in 8" :key="i">
            <v-card class="card-1 pa-5 mx-auto" height="300" width="200">
              <h1 class="text-h4 text-white">Let Test Some thing</h1>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6" md="4" lg="3" v-for="i in 8" :key="i">
            <v-card class="card-1 pa-5 mx-auto" height="300" width="200">
              <h1 class="text-h4 text-white">Let Test Some thing</h1>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6" md="4" lg="3" v-for="i in 8" :key="i">
            <v-card class="card-1 pa-5 mx-auto" height="300" width="200">
              <h1 class="text-h4 text-white">Let Test Some thing</h1>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
import { Icon, listIcons } from "@iconify/vue";
</script>
<style scoped lang="scss">
$white: #ffffff;
$black: #000000;

.card-container {
  background: url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3764&q=80");
  background-size: cover;
  background-attachment: fixed;
}
.card-1 {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid transparentize($white, 0.5);
  border-radius: 1rem;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  text-shadow: 0 0 1em transparentize($black, 0.5);
}
</style>
