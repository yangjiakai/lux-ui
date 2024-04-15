<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import { useChatGPTStore } from "@/stores/chatGPTStore";
import { useLocale } from "vuetify";
import promptsZh from "@/data/ai/prompts-zh.json";
import promptsEn from "@/data/ai/prompts-en.json";
import promptsJa from "@/data/ai/prompts-ja.json";
const { current } = useLocale();
const chatGPTStore = useChatGPTStore();

const close = () => {
  chatGPTStore.configDialog = false;
};

const apiKeyShow = ref(false);

const promptList = computed(() => {
  if (current.value === "zhHans") {
    return promptsZh;
  }
  if (current.value === "en") {
    return promptsEn;
  }
  if (current.value === "ja") {
    return promptsJa;
  }
});
</script>

<template>
  <v-dialog v-model="chatGPTStore.configDialog" width="600">
    <v-card>
      <v-card-title class="font-weight-bold pa-5">
        {{ $t("chatgpt.config.title") }}</v-card-title
      >
      <v-divider />
      <v-card-text>
        <!-- ---------------------------------------------- -->
        <!-- APIKEY -->
        <!-- ---------------------------------------------- -->

        <v-label class="font-weight-medium mb-2 ml-2">{{
          $t("chatgpt.config.apikey")
        }}</v-label>
        <v-text-field
          color="primary"
          variant="outlined"
          v-model="chatGPTStore.apiKey"
          class="px-2 py-1"
          :placeholder="$t('chatgpt.config.apikeyPlaceholder')"
          prepend-inner-icon="mdi-key"
          autofocus
          clearable
          hide-details
          @click:prepend-inner="apiKeyShow = !apiKeyShow"
        ></v-text-field>

        <!-- ---------------------------------------------- -->
        <!-- Proxy Url -->
        <!-- ---------------------------------------------- -->
        <v-label class="font-weight-medium mb-2 ml-2 mt-5">{{
          $t("chatgpt.config.proxyUrl")
        }}</v-label>
        <v-text-field
          color="primary"
          variant="outlined"
          v-model="chatGPTStore.proxyUrl"
          class="px-2 py-1"
          :placeholder="$t('chatgpt.config.proxyUrlPlaceholder')"
          prepend-inner-icon="mdi-web"
          autofocus
          clearable
          hide-details
        >
        </v-text-field>

        <!-- ---------------------------------------------- -->
        <!-- Model -->
        <!-- ---------------------------------------------- -->
        <v-label class="font-weight-medium mb-2 ml-2 mt-5">{{
          $t("chatgpt.config.model")
        }}</v-label>
        <v-card variant="outlined" style="width: 430px" class="flex ml-2 pa-2">
          <v-btn
            :variant="chatGPTStore.model === 'gpt-3.5-turbo' ? 'flat' : 'text'"
            color="primary"
            class="flex-fill mr-3"
            @click="chatGPTStore.updateModel('gpt-3.5-turbo')"
            width="200"
            >GPT-3.5</v-btn
          >
          <v-btn
            :variant="
              chatGPTStore.model === 'gpt-4-turbo-2024-04-09' ? 'flat' : 'text'
            "
            color="primary"
            class="flex-fill"
            width="200"
            @click="chatGPTStore.updateModel('gpt-4-turbo-2024-04-09')"
            >GPT-4 turbo</v-btn
          >
        </v-card>

        <!-- ---------------------------------------------- -->
        <!-- Language -->
        <!-- ---------------------------------------------- -->
        <v-label class="font-weight-medium mb-2 ml-2 mt-5">{{
          $t("chatgpt.config.role")
        }}</v-label>

        <v-select
          class="ml-2"
          v-model="chatGPTStore.propmpt"
          :items="promptList"
          item-title="act"
          item-value="prompt"
          label="Select"
          single-line
        ></v-select>

        <!-- ---------------------------------------------- -->
        <!-- prompts -->
        <!-- ---------------------------------------------- -->
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="flat" color="primary" @click="close">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
