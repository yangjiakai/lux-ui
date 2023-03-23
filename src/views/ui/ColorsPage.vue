<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { materialColorThemes } from "@/data/colors";
import CopyLabel from "@/components/common/CopyLabel.vue";

const computedColors = computed(() => {
  const colorList = [];
  Object.keys(materialColorThemes).forEach((key) => {
    const color = materialColorThemes[key];
    const colorObj = convertColorObject(key, color);
    colorList.push(colorObj);
  });
  return colorList;
});

// dark1 => dark-1
const convertToClass = (str: string) => {
  return str.replace(/^([a-z]+)(\d)$/, "$1-$2");
};

// blueGrey => blue-grey
const converToKebabCase = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

// Color Object to Array
const convertColorObject = (colorName: string, colorObj: any) => {
  const colorsArray = Object.entries(colorObj).map(([key, color]) => {
    const colorClass = convertToClass(key);
    return { key, color, colorClass };
  });

  return {
    key: colorName,
    class: converToKebabCase(colorName),
    colors: colorsArray,
  };
};
</script>

<template>
  <div class="">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="colorTheme in computedColors"
        >
          <v-card elevation="10" class="my-10">
            <v-card :color="colorTheme.class" height="200">
              <h1 class="text-h6 font-weight-bold pa-5">
                {{ colorTheme.key }}
              </h1>
            </v-card>
            <v-card
              :color="colorTheme.class + '-' + color.colorClass"
              height="100"
              class="mt-5 pa-5"
              v-for="color in colorTheme.colors"
            >
              <h3>
                <copy-label :text="colorTheme.class + '-' + color.colorClass" />
              </h3>
              <h3 class="mt-2"><copy-label :text="color.color" /></h3>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss"></style>
