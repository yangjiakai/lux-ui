<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useChatStore } from "../chatStore";
const chatStore = useChatStore();
const keyDialog = ref(false);

const close = () => {
  keyDialog.value = false;
};
</script>

<template>
  <v-card height="100%" class="pa-3">
    <!-- ---------------------------------------------- -->
    <!-- Add Task Dialog -->
    <!-- ---------------------------------------------- -->
    <v-btn
      color="#705CF6"
      block
      size="large"
      class="mb-3 text-white"
      @click="keyDialog = true"
      >API KEY</v-btn
    >
    <v-btn color="primary" block size="large" class="mb-3">New Chat</v-btn>

    <v-list nav class="mt-2 pa-0">
      <v-list-item
        prepend-icon="mdi-chat-outline"
        to="/apps/chat/base-channel"
        active-class="active-chat"
        link
        title="智慧之神"
      >
        <!-- <template v-slot:append>
          <v-badge color="primary" inline></v-badge>
        </template> -->
      </v-list-item>
    </v-list>
    <!-- <div class="pa-1 mt-2 text-overline text-grey">More Chats</div> -->
  </v-card>
  <v-dialog v-model="keyDialog" width="600">
    <v-card>
      <v-card-title> 请输入您的API KEY </v-card-title>
      <hr />
      <v-card-text>
        <v-text-field
          color="primary"
          label="API KEY"
          v-model="chatStore.apiKey"
          class="px-2 py-1"
          placeholder="API KEY"
          prepend-inner-icon="mdi-key"
          autofocus
          clearable
          hide-details
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn block color="primary" text @click="keyDialog = false"
          >关闭</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">
.active-chat {
  color: #705cf6;
  border-left: 5px solid #705cf6;
}
</style>
