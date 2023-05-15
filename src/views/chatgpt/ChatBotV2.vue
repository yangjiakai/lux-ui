<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useSnackbarStore } from "@/stores/snackbarStore";
import AnimationAi from "@/components/animations/AnimationBot2.vue";
import { read, countAndCompleteCodeBlocks } from "@/utils/aiUtils";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { scrollToBottom } from "@/utils/common";
import { useChatGPTStore } from "@/stores/chatGPTStore";
import ApiKeyDialog from "@/components/ApiKeyDialog.vue";
const snackbarStore = useSnackbarStore();
const chatGPTStore = useChatGPTStore();

interface Message {
  content: string;
  role: "user" | "assistant" | "system";
}

// User Input Message
const userMessage = ref("");

// Prompt Message
const promptMessage = computed(() => {
  return [
    {
      content: chatGPTStore.propmpt,
      role: "system",
    },
  ];
});

// Message List
const messages = ref<Message[]>([]);

const requestMessages = computed(() => {
  if (messages.value.length <= 10) {
    return [...promptMessage.value, ...messages.value];
  } else {
    // 截取最新的10条信息
    const slicedMessages = messages.value.slice(-10);
    return [...promptMessage.value, ...slicedMessages];
  }
});

// Send Messsage
const sendMessage = async () => {
  if (userMessage.value) {
    // Add the message to the list
    messages.value.push({
      content: userMessage.value,
      role: "user",
    });

    // Clear the input
    userMessage.value = "";

    // Create a completion
    await createCompletion();
  }
};

const createCompletion = async () => {
  // Check if the API key is set
  if (!chatGPTStore.getApiKey) {
    snackbarStore.showErrorMessage("请先输入API KEY");
    return;
  }

  try {
    // Create a completion (axios is not used here because it does not support streaming)
    const completion = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${chatGPTStore.getApiKey}`,
        },
        method: "POST",
        body: JSON.stringify({
          messages: requestMessages.value,
          model: "gpt-3.5-turbo",
          stream: true,
        }),
      }
    );

    // Handle errors
    if (!completion.ok) {
      const errorData = await completion.json();
      snackbarStore.showErrorMessage(errorData.error.message);

      return;
    }

    // Create a reader
    const reader = completion.body?.getReader();
    if (!reader) {
      snackbarStore.showErrorMessage("Cannot read the stream.");
    }

    // Add the bot message
    messages.value.push({
      content: "",
      role: "assistant",
    });

    // Read the stream
    read(reader, messages);
  } catch (error) {
    snackbarStore.showErrorMessage(error.message);
  }
};

watch(
  () => messages.value,
  (val) => {
    if (val) {
      scrollToBottom(document.querySelector(".message-container"));
    }
  },
  {
    deep: true,
  }
);

const displayMessages = computed(() => {
  const messagesCopy = messages.value.slice(); // 创建原始数组的副本
  const lastMessage = messagesCopy[messagesCopy.length - 1];
  const updatedLastMessage = {
    ...lastMessage,
    content: countAndCompleteCodeBlocks(lastMessage.content),
  };
  messagesCopy[messagesCopy.length - 1] = updatedLastMessage;
  return messagesCopy;
});
</script>

<template>
  <div class="chat-bot">
    <div class="messsage-area">
      <perfect-scrollbar v-if="messages.length > 0" class="message-container">
        <template v-for="message in displayMessages">
          <div v-if="message.role === 'user'">
            <div class="pa-5 user-message">
              <div class="message align-center">
                <v-avatar class="mr-4 mr-lg-8">
                  <img
                    src="@/assets/images/avatars/avatar_user.jpg"
                    alt="alt"
                  />
                </v-avatar>
                <b> {{ message.content }}</b>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="pa-5 assitant-message">
              <div class="message">
                <v-avatar class="mr-4 mr-lg-8">
                  <img
                    src="@/assets/images/avatars/avatar_assistant.jpg"
                    alt="alt"
                  />
                </v-avatar>
                <md-editor v-model="message.content" previewOnly />
              </div>
            </div>
          </div>
        </template>
      </perfect-scrollbar>
      <div class="no-message-container" v-else>
        <h1 class="text-h4 text-md-h2 text-blue-lighten-1 font-weight-bold">
          Ask Me Any Thing
        </h1>
        <AnimationAi :size="300" />
      </div>
    </div>
    <div class="input-area">
      <v-sheet
        elevation="0"
        class="input-panel d-flex align-center pa-1"
        max-width="1200"
      >
        <v-btn
          variant="elevated"
          icon
          @click="chatGPTStore.configDialog = true"
        >
          <v-icon size="30" class="text-primary">mdi-cog-outline</v-icon>
          <v-tooltip
            activator="parent"
            location="top"
            text="ChatGPT Config"
          ></v-tooltip>
        </v-btn>
        <v-text-field
          class="ml-2"
          color="primary"
          ref="input"
          v-model="userMessage"
          placeholder="SendMessage"
          hide-details
          @keyup.enter="sendMessage"
        >
          <!-- <template #prepend-inner>
            <v-icon>mdi-microphone</v-icon>
          </template> -->

          <template #append-inner>
            <v-icon @click="sendMessage">mdi-send</v-icon>
          </template>
        </v-text-field>
      </v-sheet>
      <ApiKeyDialog />
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-bot {
  background-color: #fcfcfe;
  height: 100%;
  display: flex;
  flex-direction: column;
  .messsage-area {
    flex: 1;
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
  background-color: #f6f6fd;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
}

.assitant-message {
  background-color: #fff;
  border-bottom: 1px solid #e5e7eb;
}

.message {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
}

.message-container {
  height: calc(100vh - 154px);
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
  padding: 0px;
}
</style>
