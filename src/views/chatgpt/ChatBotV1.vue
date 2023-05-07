<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useSnackbarStore } from "@/stores/snackbarStore";
import { useChatStore } from "@/views/app/chat/chatStore";
import AnimationChat from "@/components/animations/AnimationChat1.vue";
import AnimationAi from "@/components/animations/AnimationBot1.vue";
import { Icon } from "@iconify/vue";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { createCompletionApi } from "@/api/aiApi";
const snackbarStore = useSnackbarStore();
const chatStore = useChatStore();

interface Message {
  content: string;
  role: "user" | "assistant";
}

// Message List
const messages = ref<Message[]>([]);

// User Input Message
const userMessage = ref("");

const isLoading = ref(false);

// Send Messsage
const sendMessage = async () => {
  // Clear the input

  if (userMessage.value) {
    // Add the message to the list
    messages.value.push({
      content: userMessage.value,
      role: "user",
    });

    userMessage.value = "";

    isLoading.value = true;
    // Create a completion
    await createCompletion();
  }
};

const createCompletion = async () => {
  // Check if the API key is set
  if (!chatStore.getApiKey) {
    snackbarStore.showErrorMessage("请先输入API KEY");
    isLoading.value = false;
    return;
  }

  try {
    const completion = await createCompletionApi(
      {
        messages: messages.value,
        model: "gpt-3.5-turbo",
      },
      chatStore.getApiKey
    );

    isLoading.value = false;

    // Add the bot message
    messages.value.push({
      content: completion.data.choices[0].message.content,
      role: "assistant",
    });
  } catch (error) {
    isLoading.value = false;
    snackbarStore.showErrorMessage(error.message);
  }
};

// Scroll to the bottom of the message container
const scrollToBottom = () => {
  const container = document.querySelector(".message-container");
  console.log("container: ", container);

  setTimeout(() => {
    container?.scrollTo({
      top: container?.scrollHeight,
    });
  }, 100);
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
</script>

<template>
  <div class="chat-bot">
    <div class="messsage-area">
      <perfect-scrollbar v-if="messages.length > 0" class="message-container">
        <template v-for="message in messages">
          <div v-if="message.role === 'user'">
            <div class="pa-4 user-message">
              <v-avatar class="ml-4" rounded="sm" variant="elevated">
                <img src="@/assets/images/avatars/avatar_user.jpg" alt="alt" />
              </v-avatar>
              <v-card class="gradient gray" theme="dark">
                <v-card-text>
                  <b> {{ message.content }}</b></v-card-text
                >
              </v-card>
            </div>
          </div>
          <div v-else>
            <div class="pa-2 pa-md-5 assistant-message">
              <v-avatar
                class="d-none d-md-block mr-2 mr-md-4"
                rounded="sm"
                variant="elevated"
              >
                <img
                  src="@/assets/images/avatars/avatar_assistant.jpg"
                  alt="alt"
                />
              </v-avatar>
              <v-card>
                <div>
                  <md-editor
                    v-model="message.content"
                    class="font-1"
                    previewOnly
                  />
                </div>
              </v-card>
            </div>
          </div>
        </template>
        <div v-if="isLoading">
          <div class="pa-6">
            <div class="message">
              <AnimationAi :size="100" />
            </div>
          </div>
        </div>
      </perfect-scrollbar>
      <div class="no-message-container" v-else>
        <h1 class="text-h4 text-md-h2 text-blue-lighten-1 font-weight-bold">
          Chat With Me
        </h1>
        <AnimationChat :size="300" />
      </div>
    </div>
    <div class="input-area">
      <v-sheet elevation="0" class="input-panel">
        <v-text-field
          color="primary"
          type="text"
          clearable
          variant="solo"
          ref="input"
          v-model="userMessage"
          placeholder="SendMessage"
          hide-details
          @keyup.enter="sendMessage"
        >
          <template #prepend-inner>
            <v-icon>mdi-microphone</v-icon>
          </template>
          <template v-slot:append-inner>
            <v-fade-transition leave-absolute>
              <Icon
                v-if="isLoading"
                class="text-primary"
                width="30"
                icon="eos-icons:three-dots-loading"
              />
              <v-icon color="primary" v-else @click="sendMessage"
                >mdi-send</v-icon
              >
            </v-fade-transition>
          </template>
        </v-text-field>
      </v-sheet>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-bot {
  background-image: url("@/assets/images/chat-bg-2.png");
  background-repeat: repeat;
  height: 100%;
  display: flex;
  flex-direction: column;
  .messsage-area {
    flex: 1;
    height: 100%;
  }
  .input-area {
    padding: 1rem;
    height: 90px;

    align-items: center;
    .input-panel {
      border-radius: 5px;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
}

.user-message {
  display: flex;
  align-content: center;
  justify-content: end;
  flex-direction: row-reverse;
}

.assistant-message {
  display: flex;
  align-content: center;
  justify-content: start;
  flex-direction: row;
}

.message {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
}

.message-container {
  height: calc(100vh - 154px);
  background-image: url("@/assets/images/chat-bg-2.png");
  background-repeat: repeat;
}

.no-message-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 2rem;
    font-weight: 500;
  }
}

:deep(.md-editor-preview-wrapper) {
  padding: 5px 15px;
}

.font-1 {
  font-size: 13px !important;
}

@media screen and (max-width: 768px) {
  :deep(#md-editor-v3-preview),
  .user-message {
    font-size: 14px !important;
  }
}
</style>
