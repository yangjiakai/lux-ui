<!--
* @Component: BackToTop
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import ChatAssistant from "@/components/ai/ChatAssistant.vue";
import TranslationAssistant from "@/components/ai/TranslationAssistant.vue";

const toolboxShow = ref(false);
</script>

<template>
  <v-btn
    class="back-to-top elevation-10"
    @click="toolboxShow = !toolboxShow"
    size="50"
  >
    <Icon width="30" icon="ri:openai-fill" />
  </v-btn>

  <transition name="slide-y">
    <v-card
      v-if="toolboxShow"
      elevation="10"
      class="d-flex flex-column mb-1 toolbox"
    >
      <v-btn
        @click="toolboxShow = false"
        variant="text"
        size="50"
        color="error"
      >
        <v-icon size="30" text="Translation Assistant">mdi-close</v-icon>
        <v-tooltip
          activator="parent"
          location="left"
          text="Close Toolbox"
        ></v-tooltip>
      </v-btn>
      <hr />
      <ChatAssistant />
      <hr />
      <TranslationAssistant />
      <hr />

      <v-btn size="50">
        <v-icon size="30" text="Translation Assistant">mdi-code-tags</v-icon>
        <v-tooltip
          activator="parent"
          location="left"
          text="Code Assistant"
        ></v-tooltip>
      </v-btn>
    </v-card>
  </transition>
</template>

<style scoped lang="scss">
.toolbox {
  position: fixed;
  bottom: 150px;
  right: 20px;
}

.back-to-top {
  position: fixed;
  transition: all 0.3s ease;
  background-color: #fff;
  bottom: 100px;
  right: 20px;
  z-index: 999;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s;
  cursor: pointer;
  //   &:active {
  //     background-color: #344767;
  //     color: #fff;
  //     transition: all 0.3s;
  //   }
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}
</style>
