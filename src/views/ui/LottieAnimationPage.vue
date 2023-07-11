<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import AnimationSearch1 from "@/components/animations/AnimationSearch1.vue";
import AnimationSearch2 from "@/components/animations/AnimationSearch2.vue";
import AnimationFile1 from "@/components/animations/AnimationFile1.vue";
import Animation404 from "@/components/animations/Animation404.vue";
import { Vue3Lottie } from "vue3-lottie";
const animations = ref([
  {
    name: "Loading ",
    url: "https://assets7.lottiefiles.com/packages/lf20_fityEfMraU.json",
  },
  {
    name: "User Authentication ",
    url: "https://assets6.lottiefiles.com/packages/lf20_IA217HEZl6.json",
  },
  {
    name: "Loading 40",
    url: "https://assets6.lottiefiles.com/packages/lf20_x62chJ.json",
  },
  {
    name: "Loading",
    url: "https://assets4.lottiefiles.com/datafiles/KS8ZpEdYbIuaZqg/data.json",
  },
  {
    name: "Successfull",
    url: "https://assets3.lottiefiles.com/packages/lf20_jbrw3hcz.json",
  },
  {
    name: "Loading",
    url: "https://assets1.lottiefiles.com/datafiles/rFr1le9E8lhiQjf/data.json",
  },
  {
    name: "Credit Cards",
    url: "https://assets5.lottiefiles.com/packages/lf20_egmSxc.json",
  },
  {
    name: "Loading",
    url: "https://assets4.lottiefiles.com/packages/lf20_YMim6w.json",
  },
  {
    name: "Book",
    url: "https://assets5.lottiefiles.com/packages/lf20_gB9sL4mhdM.json",
  },
  {
    name: "Nyan Cat",
    url: "https://assets4.lottiefiles.com/packages/lf20_jpxsQh.json",
  },
  {
    name: "Loader Cat",
    url: "https://assets4.lottiefiles.com/packages/lf20_OT15QW.json",
  },
  {
    name: "Dog Walking",
    url: "https://assets5.lottiefiles.com/packages/lf20_2ixzdfvy.json",
  },
  {
    name: "Saas DashBoard",
    url: "https://assets7.lottiefiles.com/private_files/lf30_ddliuw7l.json",
  },
  {
    name: "Sass Form",
    url: "https://assets7.lottiefiles.com/private_files/lf30_0cwwprun.json",
  },
  {
    name: "Sass User Data",
    url: "https://assets7.lottiefiles.com/private_files/lf30_nkx11vk5.json",
  },
  {
    name: "Sass Data Table",
    url: "https://assets7.lottiefiles.com/private_files/lf30_oebelg90.json",
  },
]);
</script>

<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
          <AnimationSearch1 :size="200" />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <AnimationSearch2 :size="200" />
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3">
          <AnimationFile1 :size="200" />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <Animation404 :size="200" />
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-5" elevation="0">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="animation in animations"
          :key="animation.url"
        >
          <v-card>
            <v-card-title class="font-weight-bold text-grey-darken-3">
              {{ animation.name }}
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <Vue3Lottie
                :animationLink="animation.url"
                :height="200"
                :width="200"
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss"></style>
