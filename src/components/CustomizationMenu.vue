<script setup lang="ts">
import { useTheme } from "vuetify";
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
import { Icon } from "@iconify/vue";
const customizeTheme = useCustomizeThemeStore();
const theme = useTheme();

const themeDrawer = ref(false);
const color = ref("#0096c7");
const swatches = [
  ["#0096c7", "#31944f"],
  ["#EE4f12", "#46BBB1"],
  ["#ee44aa", "#55BB46"],
];

const currentTheme = computed(() => {
  return customizeTheme.darkTheme ? "天黑了" : "天亮了";
});

watch(color, (newVal) => {
  console.log(newVal);
  theme.themes.value.light.colors.primary = newVal;
  console.log(theme.current.value.colors.primary);
});
</script>

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
      class="theme-drawer pa-8"
    >
      <div class="top-area">
        <div class="d-flex align-center">
          <b>Soft UI Configurator</b>
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
        <div>See our dashboard options.</div>
      </div>

      <hr class="my-6" />

      <div class="theme-area">
        <b>Global Theme Mode</b>
        <div class="px-3 pt-3" v-if="customizeTheme.darkTheme">
          <v-btn
            @click="customizeTheme.darkTheme = !customizeTheme.darkTheme"
            icon
            color="grey-darken-4"
            class="text-white"
          >
            <Icon width="30" icon="line-md:moon-filled-loop" />
          </v-btn>
          <span class="ml-5">Dark Mode</span>
        </div>
        <div class="px-3 pt-3" v-else>
          <v-btn
            @click="customizeTheme.darkTheme = !customizeTheme.darkTheme"
            icon
            color="white"
            class="text-red"
          >
            <Icon
              width="30"
              icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
            />
          </v-btn>
          <span class="ml-5">Light Mode</span>
        </div>
      </div>
      <hr class="my-6" />

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

hr {
  background-image: linear-gradient(
    90deg,
    transparent,
    rgba(0, 0, 0, 0.4),
    transparent
  ) !important;
  background-color: transparent;
  opacity: 0.25;
  border: none;
  height: 1px;
}
</style>
