<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts"></script>

<template>
  <div class="">
    <v-row>
      <!-- Gap -->
      <v-col cols="3">
        <v-card>
          <v-card-title class="font-weight-bold text-center">
            gap-0(flex)
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="flex flex-wrap">
              <v-card
                color="primary"
                v-for="i in 8"
                class="d-flex justify-center align-center basis-1/4"
                height="50"
                >{{ i }}</v-card
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-title class="font-weight-bold text-center">
            gap-1(flex)
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="flex flex-wrap gap-1">
              <v-card
                color="primary"
                v-for="i in 8"
                class="d-flex justify-center align-center basis-1/4"
                height="50"
                >{{ i }}</v-card
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-title class="font-weight-bold text-center">
            gap-x-1(flex)
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="flex flex-wrap gap-x-1">
              <v-card
                color="primary"
                v-for="i in 8"
                class="d-flex justify-center align-center basis-1/4"
                height="50"
                >{{ i }}</v-card
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-title class="font-weight-bold text-center">
            gap-y-1(flex)
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="flex flex-wrap gap-y-1">
              <v-card
                color="primary"
                v-for="i in 8"
                class="d-flex justify-center align-center basis-1/4"
                height="50"
                >{{ i }}</v-card
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <!-- Gap -->
      <v-col cols="3">
        <v-card>
          <v-card-title class="font-weight-bold text-center">
            gap-0(grid)
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="grid grid-cols-4 gap-0 hover:gap-1">
              <v-card
                color="primary"
                v-for="i in 8"
                class="d-flex justify-center align-center"
                height="50"
                >{{ i }}</v-card
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-title class="font-weight-bold text-center">
            gap-1(grid)
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="grid grid-cols-4 gap-1">
              <v-card
                color="primary"
                v-for="i in 8"
                class="d-flex justify-center align-center"
                height="50"
                >{{ i }}</v-card
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-title class="font-weight-bold text-center">
            gap-x-1(grid)
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="grid grid-cols-4 gap-x-1">
              <v-card
                color="primary"
                v-for="i in 8"
                class="d-flex justify-center align-center"
                height="50"
                >{{ i }}</v-card
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-title class="font-weight-bold text-center">
            gap-y-1(grid)
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="grid grid-cols-4 gap-y-1">
              <v-card
                color="primary"
                v-for="i in 8"
                class="d-flex justify-center align-center"
                height="50"
                >{{ i }}</v-card
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss"></style>
