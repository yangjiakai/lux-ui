<template>
  <div class="d-flex text-center flex-grow-1 bg">
    <v-container style="max-width: 1400px" grid-list-xs>
      <v-row>
        <v-col cols="12" md="4">
          <h1 class="text-h5 my-5 d-flex align-center text-title">
            <Icon icon="logos:webix-icon" class="mr-3 my-2" />News
          </h1>
          <v-card
            class="my-5 pa-3"
            v-for="card in newsCards"
            :key="card.id"
            color="primary"
          >
            <v-card-text class="text-content">
              <v-row align="center" no-gutters>
                <v-col cols="2" class="text-left">
                  <Icon :icon="card.icon" class="text-h4" />
                </v-col>
                <v-col class="text-left" cols="10">
                  {{ card.content }}
                </v-col>
              </v-row>
              <v-row align="center" no-gutters>
                <v-col cols="3" class="text-left">
                  <span>12:24</span>
                </v-col>
                <v-col class="text-h5 text-right" cols="9">
                  <v-btn variant="text" color="accent">Read➧</v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="8" class="text-left">
          <h1 class="text-h5 my-5 d-flex align-center text-title">
            <Icon icon="logos:archlinux" class="mr-3 my-2" />TimeLine
          </h1>
          <v-card class="my-card" height="200">
            <v-card-text class="my-card-text d-flex align-center">
              <Icon
                class="mr-4"
                icon="logos:browserslist"
                style="font-size: 2rem"
              />
              <span>Write something...</span>
              <v-spacer></v-spacer>
              <v-btn
                variant="text"
                icon="mdi-account-search"
                @click="toggleTheme"
              ></v-btn>
              <v-btn variant="text" icon="mdi-pin"></v-btn>
            </v-card-text>
            <v-card-actions class="my-card-actions">
              <v-btn>btn</v-btn>
            </v-card-actions>
          </v-card>
          <v-card class="my-card" height="300">
            <v-card-title class="my-card-title"> title </v-card-title>
            <v-card-text class="my-card-text"> text </v-card-text>
            <v-card-actions class="my-card-actions">
              <v-btn>btn</v-btn>
            </v-card-actions>
          </v-card>
          <v-card class="my-card" height="250">
            <v-card-title class="my-card-title"> title </v-card-title>
            <v-card-text class="my-card-text"> text </v-card-text>
            <v-card-actions class="my-card-actions">
              <v-btn>btn</v-btn>
            </v-card-actions>
          </v-card>
          <v-card class="my-card" height="100"></v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { reactive } from "@vue/reactivity";
import { useTheme } from "vuetify";

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};
const newsCards = [
  {
    id: 1,
    title: "Alfresco",
    icon: "logos:alfresco",
    content: "Secure Content Management Solutions for a Distributed Workforce",
  },
  {
    id: 2,
    title: "Zulip",
    icon: "logos:zulip-icon",
    content: "Chat for distributed teams.",
  },
  {
    id: 3,
    title: "Authy",
    icon: "logos:authy",
    content: "Enable 2FA for your favorite sites",
  },
  {
    id: 4,
    title: "Appveyor",
    icon: "logos:appveyor",
    content: "Build, test, deploy your apps faster, on any platform.",
  },
  {
    id: 5,
    title: "Ant-design",
    icon: "logos:ant-design",
    content:
      "Help designers/developers building beautiful products more flexible and working with happiness",
  },
];

const myTheme = reactive({
  // primary colors
  colorPrimary: "#272740",
  colorPrimaryLight: "#44416d",
  colorPrimaryDarken: "#1d1f33",
  // secondary colors
  colorAccent: "#6386e1",
  colorInfo: "#24a6c5",
  colorError: "#e47171",
  // neutral colors
  colorTitle: "#FFF",
  colorContent: "#8381a7",
  colorBg: "#1d1f33",
  colorBorder: "#1d1f33",
  colorDivider: "#1d1f33",
});
</script>

<style lang="scss" scoped>
// primary colors
$color-primary: #272740;
$color-primary-light: #44416d;
$color-primary-darken: #1d1f33;
// secondary colors
$color-accent: #6386e1;
$color-info: #24a6c5;
$color-error: #e47171;
// neutral colors
$color-title: #eeeeee;
$color-content: #8381a7;
$color-bg: #1d1f33;
$color-border: #1d1f33;
$color-divider: #1d1f33;

.bg {
  color: $color-content;
  text-align: left;
  height: 100vh;
  // background-image: linear-gradient(135deg, #1c1e30, #2f3050);
}

.my-card {
  color: $color-content;
  margin-bottom: 2rem;
  background-color: $color-primary;

  h1,
  h2,
  h3,
  h4,
  h5,
  h,
  .text-h5 {
    color: $color-title !important;
  }

  p {
    color: $color-content;
  }

  .my-card-title {
    background-color: $color-primary-light;
  }

  .my-card-text {
    padding: 1rem;
  }

  .my-card-actions {
    background-color: $color-primary-light;
  }
}
</style>
