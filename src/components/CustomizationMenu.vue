<template>
  <div>
    <div class="drawer-button" @click="themeDrawer = true">
      <v-icon class="text-white">mdi-cog-outline</v-icon>
    </div>

    <v-navigation-drawer
      v-model="themeDrawer"
      location="right"
      temporary
      width="300"
      color="rgba(255,255,255,.7)"
    >
      <div class="d-flex align-center pa-2">
        <div class="text-body-2">Settings</div>
        <v-spacer></v-spacer>
        <v-btn
          variant="text"
          color="primary"
          size="small"
          rounded
          icon="mdi-close"
          @click="themeDrawer = false"
        >
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

<script setup lang="ts">
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
  background-color: #ee44aa;
  top: 340px;
  right: 0px;
  z-index: 999;
  padding: 0.5rem 1rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  box-shadow: 1px 1px 9px #ee44aa;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 18px #ee44aa;
    transition: all 0.5s;
  }

  .v-icon {
    font-size: 1.3rem;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
