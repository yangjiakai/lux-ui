<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { materialColorThemes } from "@/data/colors";
const computedColors = computed(() => {
  const colorKeys = Object.keys(materialColorThemes);
  const colors = colorKeys.map((key) => {
    const color = materialColorThemes[key];
    return {
      key,
      color,
    };
  });
  return colors;
});
</script>

<template>
  <div class="">
    {{ computedColors }}
    <!-- <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="colorTheme in materialColorThemes"
        >
          <v-card>
            <h1>{{ colorTheme.key }}</h1>

            <v-card height="100" v-for="color in colorTheme.colors">
              <div class="d-flex align-center">
                <div class="flex-grow-1">
                  <v-card :color="color.color" height="100" class="mt-5">
                    <h3>{{ color.key }}</h3>
                    <h3>{{ color.color }}</h3>
                  </v-card>
                </div>
              </div>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<style scoped lang="scss"></style>
