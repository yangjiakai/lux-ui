<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useChatGPTStore } from "@/stores/chatGPTStore";
const chatGPTStore = useChatGPTStore();

const close = () => {
  chatGPTStore.configDialog = false;
};

const apiKeyShow = ref(false);
</script>

<template>
  <v-dialog v-model="chatGPTStore.configDialog" width="600">
    <v-card>
      <v-card-title class="font-weight-bold pa-5">
        Input your Api Key</v-card-title
      >
      <v-divider />
      <v-card-text>
        <v-label class="font-weight-medium mb-2 ml-2">YOUR API KEY</v-label>
        <v-text-field
          color="primary"
          variant="outlined"
          v-model="chatGPTStore.apiKey"
          class="px-2 py-1"
          placeholder="If not input , the ApiKey in the .env will be used."
          prepend-inner-icon="mdi-key"
          autofocus
          clearable
          hide-details
          @click:prepend-inner="apiKeyShow = !apiKeyShow"
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="flat" color="primary" @click="close">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
