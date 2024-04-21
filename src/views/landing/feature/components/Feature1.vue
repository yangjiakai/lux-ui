<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts"></script>

<template>
  <v-card class="my-5" rounded>
    <v-card-title class="card-title">Feature1</v-card-title>
    <v-divider></v-divider>
    <div class="pa-10">
      <v-card max-width="1600" class="mx-auto" variant="flat">
        <v-row no-gutters align="stretch">
          <v-col cols="12">
            <v-card
              elevation="0"
              height="100%"
              class="mx-auto pa-10 pa-md-15 d-flex flex-column justify-center"
            >
              <div>
                <RouterLink to="/" class="text-primary font-weight-bold"
                  >WORK WITH US</RouterLink
                >
                <h1 class="font-weight-black text-h3 mt-5 mb-10">
                  Get your startup ready for
                  <span class="text-primary">Business</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  impedit error labore doloremque fugit! Dolor fugit molestiae
                  vero quos quisquam nobis, eos debitis magni omnis ea incidunt
                  amet voluptate dignissimos!
                </p>
                <v-btn color="primary" size="large" class="mt-10"
                  >Get In Touch</v-btn
                >
              </div>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card height="100%"> </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-card>
</template>

<style scoped lang="scss"></style>
