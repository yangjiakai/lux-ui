<template>
  <div>
    <v-btn
      class="drawer-button"
      color="#ee44aa"
      dark
      @click="themeDrawer = true"
    >
      <v-icon class="fa-spin">mdi-cog-outline</v-icon>
    </v-btn>

    <v-navigation-drawer
      v-model="themeDrawer"
      location="right"
      temporary
      width="300"
    >
      <div class="d-flex align-center pa-2">
        <div class="text-body-2">Settings</div>
        <v-spacer></v-spacer>
        <v-btn variant="icon" @click="themeDrawer = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <v-divider></v-divider>
      <div class="pa-2">
        <div class="font-weight-bold my-1">Global Theme</div>
        <v-btn-toggle v-model="theme" color="primary" mandatory class="mb-2">
          <v-btn x-large>Light</v-btn>
          <v-btn x-large>Dark</v-btn>
        </v-btn-toggle>
        <v-divider></v-divider>
        <v-color-picker
          v-model="color"
          mode="hexa"
          :swatches="swatches"
          show-swatches
        ></v-color-picker>
        <v-btn color="primary">text</v-btn>
        <h1 class="text-primary">3333</h1>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();

const themeDrawer = ref(false);
const color = ref("#0096c7");
const swatches = [
  ["#0096c7", "#31944f"],
  ["#EE4f12", "#46BBB1"],
  ["#ee44aa", "#55BB46"],
];

watch(color, (newVal) => {
  console.log(newVal);
  theme.themes.value.light.colors.primary = newVal;
  console.log(theme.current.value.colors.primary);
});
</script>

<style lang="scss" scoped>
.drawer-button {
  position: fixed;
  top: 340px;
  right: -20px;
  z-index: 6;
  box-shadow: 1px 1px 18px #ee44aa;

  .v-icon {
    margin-left: -18px;
    font-size: 1.3rem;
  }
}
</style>
