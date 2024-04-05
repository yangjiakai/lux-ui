<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import configs from "@/configs";
import MainMenu from "@/components/navigation/MainMenu.vue";
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
import { Icon } from "@iconify/vue";
const customizeTheme = useCustomizeThemeStore();
const navigation = ref(configs.navigation);

const openGithubSite = () => {
  window.open("https://github.com/yangjiakai", "_blank");
};

onMounted(() => {
  scrollToBottom();
});

const scrollToBottom = () => {
  const contentArea = document.querySelector(".v-navigation-drawer__content");
  const activeItem = document.querySelector(
    ".v-list-item--active"
  ) as HTMLElement;

  setTimeout(() => {
    contentArea?.scrollTo({
      top: activeItem?.offsetTop,
    });
  }, 100);
};
</script>

<template>
  <v-navigation-drawer
    elevation="1"
    v-model="customizeTheme.mainSidebar"
    id="mainMenu"
  >
    <!-- ---------------------------------------------- -->
    <!---Top Area -->
    <!-- ---------------------------------------------- -->
    <template v-if="!customizeTheme.miniSidebar" v-slot:prepend>
      <v-card height="100" class="logo-card">
        <!-- <img
          v-if="customizeTheme.darkTheme"
          width="200"
          src="@/assets/logo_dark.svg"
          alt=""
        />
        <img
          v-else="customizeTheme.darkTheme"
          width="200"
          src="@/assets/logo_light.svg"
          alt=""
        /> -->
        <h1 class="logo-text h-full">
          <Icon class="mr-2" width="40" icon="solar:plain-bold-duotone" />
          <span>Lux-UI</span>
        </h1>
      </v-card>
    </template>

    <!-- ---------------------------------------------- -->
    <!---Nav List -->
    <!-- ---------------------------------------------- -->
    <div class="main-menu">
      <main-menu :menu="navigation.menu"></main-menu>
    </div>
    <!-- ---------------------------------------------- -->
    <!---Bottom Area -->
    <!-- ---------------------------------------------- -->
    <template v-if="!customizeTheme.miniSidebar" v-slot:append>
      <v-card height="225" class="pa-3" variant="text">
        <v-card
          class="d-flex flex-column pa-2 gradient-card text-white"
          height="200 "
        >
          <v-card-title>
            <v-btn class="mr-2" size="40" color="white" icon>
              <Icon width="30" icon="line-md:github-loop" />
            </v-btn>
            Yang J.K.
          </v-card-title>
          <v-card-subtitle> </v-card-subtitle>
          <v-card-text>
            <div><b>Github:</b></div>
            <div>github.com/yangjiakai</div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              block
              prepend-icon="mdi-thumb-up-outline"
              variant="outlined"
              @click="openGithubSite"
              color="white"
            >
              Star-Me
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </template>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.gradient-card {
  // background: linear-gradient(
  //   to bottom,
  //   rgba(var(--v-theme-primary), 1),
  //   rgba(var(--v-theme-primary), 0.9)
  // );
  background: linear-gradient(
    270deg,
    rgba(var(--v-theme-primary), 0.7) 0,
    rgb(var(--v-theme-primary)) 100%
  );
  box-shadow: 0 2px 6px rgba(var(--v-theme-primary), 0.3);
}

.logo-card {
  .logo-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 600;
    color: rgba(var(--v-theme-primary));
  }
}
</style>
