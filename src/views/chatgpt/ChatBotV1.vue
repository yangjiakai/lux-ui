<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import { useSnackbarStore } from "@/stores/snackbarStore";
import AnimationChat from "@/components/animations/AnimationChat1.vue";
import AnimationAi from "@/components/animations/AnimationBot1.vue";
import { read, countAndCompleteCodeBlocks } from "@/utils/aiUtils";
import { scrollToBottom } from "@/utils/common";
import MdEditor from "md-editor-v3";
import { useChatGPTStore } from "@/stores/chatGPTStore";
import "md-editor-v3/lib/style.css";
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
  console.log("chatGPTStore.propmpt", chatGPTStore.propmpt);

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

const isLoading = ref(false);

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
  // if (!chatGPTStore.getApiKey) {
  //   snackbarStore.showErrorMessage("请先输入API KEY");
  //   return;
  // }

  const proxyUrl = chatGPTStore.proxyUrl
    ? chatGPTStore.proxyUrl
    : "https://openai.wndbac.cn";
  try {
    // Create a completion (axios is not used here because it does not support streaming)
    const completion = await fetch(`${proxyUrl}/v1/chat/completions`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${chatGPTStore.getApiKey}`,
      },
      method: "POST",
      body: JSON.stringify({
        messages: requestMessages.value,
        model: chatGPTStore.model,
        stream: true,
      }),
    });

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

const handleKeydown = (e) => {
  if (e.key === "Enter" && (e.altKey || e.shiftKey)) {
    // 当同时按下 alt或者shift 和 enter 时，插入一个换行符
    e.preventDefault();
    userMessage.value += "\n";
  } else if (e.key === "Enter") {
    // 当只按下 enter 时，发送消息
    e.preventDefault();
    sendMessage();
  }
};

const inputRow = ref(1);
</script>

<template>
  <div class="chat-bot">
    <div class="messsage-area">
      <perfect-scrollbar v-if="messages.length > 0" class="message-container">
        <template v-for="message in displayMessages">
          <div v-if="message.role === 'user'">
            <div class="pa-4 user-message">
              <v-avatar class="ml-4" rounded="sm" variant="elevated">
                <img src="@/assets/images/avatars/avatar_user.jpg" alt="alt" />
              </v-avatar>
              <v-card class="gradient gray text-pre-wrap" theme="dark">
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
      <v-sheet
        color="transparent"
        elevation="0"
        class="input-panel d-flex align-end pa-1"
      >
        <v-btn
          class="mb-1"
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
        <transition name="fade">
          <v-textarea
            class="mx-2"
            color="primary"
            type="text"
            clearable
            variant="solo"
            ref="input"
            v-model="userMessage"
            placeholder="Ask Anything"
            hide-details
            @keydown="handleKeydown"
            :rows="inputRow"
            @focus="inputRow = 3"
            @blur="inputRow = 1"
          >
          </v-textarea>
        </transition>

        <v-btn class="mb-1" color="primary" variant="elevated" icon>
          <v-icon @click="sendMessage">mdi-send</v-icon>
        </v-btn>
      </v-sheet>
      <ApiKeyDialog />
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-bot {
  background-repeat: repeat;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .messsage-area {
    flex: 1;
    height: 100%;
  }

  .input-area {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 1rem;
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
