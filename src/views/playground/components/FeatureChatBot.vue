<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useSnackbarStore } from "@/stores/snackbarStore";
import { useChatStore } from "@/views/app/chat/chatStore";
import { read } from "@/utils/aiUtils";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
const snackbarStore = useSnackbarStore();
const chatStore = useChatStore();

// Message List
const messages = ref([
  {
    text: "你好",
    type: "user",
  },
  {
    text: "你好",
    type: "bot",
  },
]);

// User Input Message
const userMessage = ref("");

// Send Messsage
const sendMessage = async () => {
  if (userMessage.value) {
    messages.value.push({
      text: userMessage.value,
      type: "user",
    });
    await translate();

    userMessage.value = "";
  }
};

watch(
  () => messages.value,
  (val) => {
    if (val) {
      scrollToBottom();
    }
  },
  {
    deep: true,
  }
);

const scrollToBottom = () => {
  const container = document.querySelector(".message-container");
  setTimeout(() => {
    container?.scrollTo({
      top: container?.scrollHeight,
    });
  }, 100);
};

const isLoading = ref(false);

// const newMessage = ref("AAAA");

const translate = async () => {
  if (!chatStore.apiKey) {
    snackbarStore.showErrorMessage("请先输入API KEY");
    return;
  }
  isLoading.value = true;
  try {
    const completion = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${chatStore.apiKey}`,
        },
        method: "POST",
        body: JSON.stringify({
          messages: [{ role: "user", content: userMessage.value }],
          model: "gpt-3.5-turbo",
          stream: true,
        }),
      }
    );

    // Handle errors
    if (!completion.ok) {
      const errorData = await completion.json();
      snackbarStore.showErrorMessage(errorData.error.message);
      isLoading.value = false;
      return;
    }

    // Create a reader
    const reader = completion.body?.getReader();
    if (!reader) {
      snackbarStore.showErrorMessage("Cannot read the stream.");
      isLoading.value = false;
    }

    messages.value.push({
      text: "",
      type: "bot",
    });

    // Read the stream
    read(reader, messages);
  } catch (error) {
    snackbarStore.showErrorMessage(error.message);
  }
  isLoading.value = false;
};
</script>

<template>
  <div>
    <perfect-scrollbar class="message-container">
      <template v-for="message in messages">
        <div v-if="message.type === 'user'">
          <div class="pa-6 user-message">
            <div class="message align-center">
              <v-avatar class="mr-4">
                <img
                  src="https://lh3.googleusercontent.com/a/AGNmyxZcE23yf7BAdb2S3fAGHBfQaUOkfjYtgsKHrDXLbx0=s96-c"
                  alt="alt"
                />
              </v-avatar>
              {{ message.text }}
            </div>
          </div>
        </div>
        <div v-else>
          <div class="bg-white pa-6">
            <div class="message">
              <v-avatar class="mr-4">
                <img
                  src="https://app.writesonic.com/_next/static/media/chatsonic.295d6981.png"
                  alt="alt"
                />
              </v-avatar>
              <md-editor v-model="message.text" previewOnly />
            </div>
          </div>
        </div>
      </template>
    </perfect-scrollbar>

    <v-card class="ma-5">
      <v-text-field
        color="primary"
        ref="input"
        v-model="userMessage"
        placeholder="SendMessage"
        hide-details
        @keyup.enter="sendMessage"
      >
        <template #prepend-inner>
          <v-icon>mdi-microphone</v-icon>
        </template>

        <template #append-inner>
          <v-icon @click="sendMessage">mdi-send</v-icon>
        </template>
      </v-text-field>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
.user-message {
  background-color: #f6f6f6;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
}

.message {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
}

.message-container {
  height: 800px;
}
</style>
