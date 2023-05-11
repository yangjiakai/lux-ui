<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useSnackbarStore } from "@/stores/snackbarStore";
import AnimationAi from "@/components/animations/AnimationBot1.vue";
// import AnimationSpeech from "@/components/animations/AnimationSpeech.vue";
import AnimationRecording from "@/components/animations/AnimationRecording.vue";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import AnimaitonCss01 from "@/components/animations/AnimaitonCss01.vue";
import AnimaitonCss02 from "@/components/animations/AnimaitonCss02.vue";
import { useSpeechStore } from "@/stores/speechStore";
import { createTranscriptionApi, createCompletionApi } from "@/api/aiApi";
import VoiceConfigDialog from "@/components/ai/VoiceConfigDialog.vue";
import { useChatGPTStore } from "@/stores/chatGPTStore";
const snackbarStore = useSnackbarStore();
const speechStore = useSpeechStore();
const chatGPTStore = useChatGPTStore();
interface Message {
  content: string;
  role: "user" | "assistant" | "system";
}

// Message List
const messages = ref<Message[]>([
  {
    content:
      "想象我们是朋友,和我进行轻松有趣的对话。我们可以聊天天气、音乐、电影、运动或者日常生活等话题。请尽情地与我互动并回应我的问题,让我们像朋友一样自然地交流。并且我会多种语言,我会用不同的语言跟你交流,比如说我当前的问题是中文时,希望你下个回答用中文,我当前的问题是英文时,你的下个回答用英文,我当前的问题是日语时,你的下个回答是日语",
    role: "system",
  },
]);

// User Input Message
const userMessage = ref("");

const isLoading = ref(false);

// Send Messsage
const sendMessage = async () => {
  if (userMessage.value) {
    // Add the message to the list
    messages.value.push({
      content: userMessage.value,
      role: "user",
    });

    state.isRecording = false;
    state.isResponse = true;
    // Create a completion
    await createCompletion();

    // Clear the input
    userMessage.value = "";
  }
};

const createCompletion = async () => {
  // Check if the API key is set
  if (!chatGPTStore.getApiKey) {
    snackbarStore.showErrorMessage("请先输入API KEY");
    isLoading.value = false;
    return;
  }

  try {
    const completion = await createCompletionApi(
      {
        messages: messages.value,
        model: "gpt-3.5-turbo",
        temperature: 1,
        n: 1,
        max_tokens: 200,
      },
      chatGPTStore.getApiKey
    );

    isLoading.value = false;

    // Add the bot message
    messages.value.push({
      content: completion.data.choices[0].message.content,
      role: "assistant",
    });
    state.isResponse = false;
    speechStore.ssmlToSpeak(completion.data.choices[0].message.content);
  } catch (error) {
    state.isResponse = false;
    snackbarStore.showErrorMessage(error.message);
  }
};

// Scroll to the bottom of the message container
const scrollToBottom = () => {
  const container = document.querySelector(".message-container");
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

const recorder = ref<any>();
const startRecording = async () => {
  // 获取用户媒体权限，视频的话参数{audio: true, video: true}
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      // 创建媒体流
      recorder.value = new MediaRecorder(stream);
      const audioChunks = <any>[];
      // 录音开始
      recorder.value.start();
      state.isRecording = true;

      // 录音数据
      recorder.value.ondataavailable = (e: any) => {
        audioChunks.push(e.data);
      };
      // 录音结束
      recorder.value.onstop = async (e: any) => {
        const blob = new Blob(audioChunks, { type: "audio/wav" });
        const file = new File([blob], "recording.wav", {
          type: "audio/wav",
        });
        const formData = new FormData();
        formData.append("file", file);
        formData.append("model", "whisper-1");
        const res = await createTranscriptionApi(
          formData,
          chatGPTStore.getApiKey
        );
        userMessage.value = res.data.text;

        // 停止媒体流的所有轨道
        stream.getTracks().forEach((track) => track.stop());

        if (userMessage.value) {
          sendMessage();
        } else {
          state.isRecording = false;
        }
      };
    })
    .catch((error) => {
      snackbarStore.showErrorMessage(error.message);
    });
};

const stopRecording = () => {
  if (recorder.value) {
    recorder.value.stop();
    state.isRecording = false;
    state.isResponse = true;
  }
};

const state = reactive({
  isRecording: false,
  isResponse: false,
});

const clearMessages = () => {
  messages.value = [
    {
      content:
        "想象我们是朋友,和我进行轻松有趣的对话。我们可以聊天天气、音乐、电影、运动或者日常生活等话题。请尽情地与我互动并回应我的问题,让我们像朋友一样自然地交流。并且我会多种语言,我会用不同的语言跟你交流,比如说我当前的问题是中文时,希望你下个回答用中文,我当前的问题是英文时,你的下个回答用英文,我当前的问题是日语时,你的下个回答是日语",
      role: "system",
    },
  ];
};
</script>

<template>
  <!-- Message List -->
  <div class="chat-bot">
    <div class="messsage-area">
      <perfect-scrollbar v-if="messages.length > 1" class="message-container">
        <template v-for="message in messages">
          <div v-if="message.role === 'user'">
            <div class="pa-5 user-message">
              <v-avatar class="ml-4" rounded="lg" variant="elevated">
                <img src="@/assets/images/avatars/avatar_user.jpg" alt="alt" />
              </v-avatar>
              <v-card
                class="gradient gray rounded-xl rounded-be-0"
                theme="dark"
              >
                <v-card-text>
                  <b> {{ message.content }}</b></v-card-text
                >
              </v-card>
            </div>
          </div>
          <div v-else-if="message.role === 'assistant'">
            <div class="pa-5 assistant-message">
              <v-avatar class="mr-4" rounded="sm" variant="elevated">
                <img
                  src="@/assets/images/avatars/avatar_assistant.jpg"
                  alt="alt"
                />
              </v-avatar>

              <v-card class="rounded-xl rounded-bs-0">
                <div>
                  <md-editor v-model="message.content" previewOnly />
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

      <!-- No Message Content -->
      <div class="no-message-container" v-else>
        <h1 style="color: #4d5271" class="text-h3 text-md-h2 font-weight-bold">
          Talk With Me
        </h1>

        <AnimationAi :size="300" />
      </div>
    </div>
    <div class="input-area">
      <v-sheet class="input-panel" height="100">
        <div class="panel-left">
          <span>
            <VoiceConfigDialog />
          </span>
        </div>
        <div class="panel-center">
          <!-- Recording Animation -->
          <AnimationRecording
            v-if="state.isRecording"
            @click="stopRecording"
            :size="140"
          />
          <!-- Response Animation -->
          <AnimaitonCss02 v-else-if="state.isResponse" />
          <!-- Playing Animation -->
          <AnimaitonCss01 v-else-if="speechStore.isPlaying" />
          <!-- Recording Btn -->
          <v-btn
            v-else
            size="x-large"
            icon
            variant="elevated"
            class="gradient gray"
            @click="startRecording"
            ><v-icon size="30">mdi-microphone</v-icon></v-btn
          >
        </div>
        <div class="panel-right">
          <v-btn icon variant="elevated" @click="clearMessages">
            <v-icon size="30" class="text-primary">mdi-broom</v-icon>
            <v-tooltip
              activator="parent"
              location="top"
              text="Clear"
            ></v-tooltip>
          </v-btn>
        </div>
      </v-sheet>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-bot {
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  .messsage-area {
    flex: 1;
  }
  .input-area {
    height: 152;
    padding: 1rem;
    border-top: 1px solid #ddd;

    align-items: center;
    .input-panel {
      border-radius: 5px;
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: relative;
      .config {
        position: absolute;
        bottom: 10px;
        left: 0;
        margin: 30px;
      }
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
  height: calc(100vh - 216px);
  background-color: rgba(250, 250, 250, 1);
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
  padding: 5px 16px;
}
</style>

<!-- <span class="config">
  <VoiceConfigDialog />

  <span class="ml-2 text-h6 font-weight-bold text-primary">{{
    speechStore.localName
  }}</span>
  <v-chip
    density="comfortable"
    class="d-none d-sm-inline ml-1 font-weight-bold"
    label
    size="small"
    color="primary"
  >
    {{ speechStore.speechSynthesisLanguage }}</v-chip
  >
</span> -->
