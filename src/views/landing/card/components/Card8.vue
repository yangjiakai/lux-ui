<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import { Icon, listIcons } from "@iconify/vue";
</script>

<template>
  <v-toolbar color="#F9FAFB" height="60">
    <v-toolbar-title class="text-h6 font-weight-bold">
      <span>Card8</span>
    </v-toolbar-title>
  </v-toolbar>
  <v-sheet elevation="0" class="mx-auto landing-warpper text-left" rounded>
    <v-sheet
      elevation="0"
      color="transparent"
      max-width="1600 "
      class="mx-auto my-10"
    >
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" lg="4" xl="3" v-for="i in 3">
          <v-card
            class="card mx-auto my-5"
            variant="flat"
            height="400"
            width="300"
          >
            <v-img cover :src="'https://picsum.photos/400?random=' + i"></v-img>
          </v-card>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="12" md="6" lg="4" xl="3" v-for="i in 3">
          <v-card
            class="card-2 mx-auto my-5 pa-2"
            height="400"
            width="300"
            variant="flat"
          >
            <v-card height="100%" elevation="0"> </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-sheet>
</template>

<style scoped lang="scss">
.landing-warpper {
  background-image: linear-gradient(135deg, #ce9ffc, #7367f0);
}

.card {
  position: relative;
  height: 400px;
  width: 300px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.card-2 {
  background-image: linear-gradient(135deg, #988ea3, #b71f4a);
}
</style>
