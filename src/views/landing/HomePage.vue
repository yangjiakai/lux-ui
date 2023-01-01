<template>
  <div class="d-flex text-center flex-grow-1 bg-background">
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
          <!-- Info Card1 -->

          <v-card color="primary" class="info-card">
            <v-card-text class="d-flex align-center text-content">
              <Icon class="mr-5 text-h4" icon="logos:browserslist" />
              <span>Write something...</span>
              <v-spacer></v-spacer>
              <v-btn
                variant="text"
                icon="mdi-account-search"
                @click="toggleTheme"
              ></v-btn>
              <v-btn variant="text" icon="mdi-pin"></v-btn>
            </v-card-text>
            <v-card-actions class="bg-primary-lighten-1 py-5 text-title">
              <v-checkbox
                density="default"
                hide-details
                label="Checkbox"
              ></v-checkbox>

              <v-select
                variant="outlined"
                placeholder="who can see"
                density="compact"
                hide-details
                class="ml-n10 mr-2"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
              ></v-select>
              <v-select
                variant="outlined"
                placeholder="channel"
                density="compact"
                hide-details
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
              ></v-select>
              <v-btn variant="text" icon="mdi-pin"></v-btn>
              <v-spacer></v-spacer>
              <v-btn variant="tonal" icon="mdi-heart" color="accent"></v-btn>
            </v-card-actions>
          </v-card>

          <!-- Info Card 2 -->
          <v-card color="primary" class="info-card">
            <v-card-title class="bg-primary-lighten-1 text-content">
              <Icon class="mr-5 text-h4" icon="logos:capacitorjs-icon" />
              <span
                >Hho has the advantage now? Who do you think will win the
                election?</span
              >
              <v-spacer></v-spacer>
              <span>9:31 am</span>
            </v-card-title>
            <v-card-text class="text-content"> </v-card-text>
            <v-card-actions class="bg-primary-lighten-1 text-content">
              <v-btn>btn</v-btn>
            </v-card-actions>
          </v-card>
          <!-- Info Card3 -->
          <v-card color="primary" class="info-card">
            <v-card-title class="bg-primary-lighten-1 text-content">
              title
            </v-card-title>
            <v-card-text class=""> text </v-card-text>
            <v-card-actions class="bg-primary-lighten-1 text-content">
              <v-btn>btn</v-btn>
            </v-card-actions>
          </v-card>
          <!-- Info Card4 -->
          <v-card color="primary" class="info-card" height="100"></v-card>
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
.bg {
  text-align: left;
  height: 100vh;
  // background-image: linear-gradient(135deg, #1c1e30, #2f3050);
}

.info-card {
  margin-bottom: 2rem;

  .v-card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    font-size: 1rem;
  }

  .v-card-text {
    padding: 2rem;
  }

  .v-card-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    font-size: 1rem;
  }
}
</style>
