<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useSnackbarStore } from "@/stores/snackbarStore";
import { useChatStore } from "@/views/app/chat/chatStore";
import AnimationAi from "@/components/animations/AnimationBot1.vue";
// import AnimationSpeech from "@/components/animations/AnimationSpeech.vue";
import AnimationRecording from "@/components/animations/AnimationRecording.vue";
import {
  AudioConfig,
  SpeakerAudioDestination,
  SpeechConfig,
  SpeechSynthesisOutputFormat,
  ResultReason,
  SpeechSynthesizer,
} from "microsoft-cognitiveservices-speech-sdk";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

import AnimaitonCss01 from "@/components/animations/AnimaitonCss01.vue";
import AnimaitonCss02 from "@/components/animations/AnimaitonCss02.vue";
// import AnimaitonCss03 from "@/components/animations/AnimaitonCss03.vue";

import { createTranscriptionApi, createCompletionApi } from "@/api/aiApi";
const snackbarStore = useSnackbarStore();
const chatStore = useChatStore();

interface Message {
  content: string;
  role: "user" | "assistant" | "system";
}

// Message List
const messages = ref<Message[]>([
  {
    content:
      "想象我们是朋友，和我进行轻松有趣的对话。我们可以聊天天气、音乐、电影、运动或者日常生活等话题。请尽情地与我互动并回应我的问题，让我们像朋友一样自然地交流。",
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
        temperature: 1,
        n: 1,
      },
      chatStore.getApiKey
    );

    isLoading.value = false;

    // Add the bot message
    messages.value.push({
      content: completion.data.choices[0].message.content,
      role: "assistant",
    });

    textToSpeech();
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
        const res = await createTranscriptionApi(formData, chatStore.getApiKey);
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
  isPlaying: false,
});

const subscriptionKey = ref("3a3b5d289df1465ea8fb41b4d9a8ef91");
const region = ref("eastus");

// 创建语音配置对象
const speechConfig = SpeechConfig.fromSubscription(
  subscriptionKey.value,
  region.value
);

// 设置输出音频格式
speechConfig.speechSynthesisOutputFormat =
  SpeechSynthesisOutputFormat.Audio16Khz32KBitRateMonoMp3;

// 通过playback结束事件来判断播放结束
const player = new SpeakerAudioDestination();
player.onAudioStart = function (_) {
  // 在开始语音合成之前设置为 true
  state.isPlaying = true;
  console.log("playback started");
};
player.onAudioEnd = function (_) {
  state.isPlaying = false;
  console.log("playback finished");
};

// const audioConfig = AudioConfig.fromDefaultMicrophoneInput();
const audioConfiga = AudioConfig.fromSpeakerOutput(player);

// 创建一个语音合成器
const synthesizer = new SpeechSynthesizer(speechConfig, audioConfiga);

async function textToSpeech() {
  // 将文本转换为语音
  try {
    const result = await new Promise((resolve, reject) => {
      synthesizer.speakTextAsync(
        messages.value[messages.value.length - 1].content,
        (speechResult) => {
          if (speechResult.reason === ResultReason.SynthesizingAudioCompleted) {
            resolve(speechResult);
          } else {
            reject(
              new Error(
                `Speech synthesis failed with reason: ${speechResult.reason}`
              )
            );
          }
        },
        (error) => {
          state.isPlaying = false; // 在语音合成出现错误时设置为 false
          reject(error);
        }
      );
    });
    state.isResponse = false;
    // 处理语音合成结果，例如播放音频或将其发送到客户端
    console.log("Text-to-speech synthesis result:", result);
  } catch (error) {
    console.error("Error during text-to-speech synthesis:", error);
  } finally {
    // 关闭语音合成器以释放资源
    synthesizer.close();
  }
}

// 获取语音列表
// const getVoices = async () => {
//   const res = await synthesizer.getVoicesAsync();
//   allVoices.value = res.voices.filter((voice) =>
//     languages.value.includes(voice.locale)
//   );

//   // fr-FR 法语 ja-JP 日语 en-US 英语 zh-CN 中文 zh-HK 粤语 ko-KR 韩语 de-DE 德语

//   console.log("allVoices", allVoices.value);
// };
</script>

<template>
  <v-card class="bg">
    <perfect-scrollbar v-if="messages.length > 1" class="message-container">
      <template v-for="message in messages">
        <div v-if="message.role === 'user'">
          <div class="pa-6 user-message">
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
        <div v-else-if="message.role === 'assistant'">
          <div class="pa-6 assistant-message">
            <v-avatar class="mr-4" rounded="sm" variant="elevated">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrAiMevuwrbU9o0Ck2paVf4ufHUDb2dU48MEDrAlrQw&s"
                alt="alt"
              />
            </v-avatar>
            <v-card>
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

    <div class="no-message-container" v-else>
      <h1 style="color: #6746f5" class="text-h4 text-md-h2 font-weight-bold">
        Talk With Me
      </h1>

      <AnimationAi :size="300" />
    </div>
    <v-sheet
      elevation="0"
      color="transparent"
      class="my-4 px-4 mx-auto d-flex align-center justify-center"
      max-width="400"
      height="120"
    >
      <!-- Todo Select Model  -->

      <v-btn
        v-if="!state.isRecording && !state.isResponse && !state.isPlaying"
        size="x-large"
        color="#6746f5"
        class="text-white"
        icon
        variant="elevated"
        @click="startRecording"
        ><v-icon>mdi-microphone</v-icon></v-btn
      >
      <!-- Recording Animation -->

      <AnimationRecording
        v-else-if="state.isRecording"
        @click="stopRecording"
        :size="140"
      />
      <!-- <v-btn
      
        color="success"
        @click="stopRecording"
      >
        <AnimaitonCss01 />
      </v-btn> -->

      <!-- Response Animation -->
      <AnimaitonCss02 v-else-if="state.isResponse" />

      <!-- Playing Animation -->

      <AnimaitonCss01 v-else-if="state.isPlaying" />
      <!-- <AnimaitonCss03 /> -->
      <!-- <v-text-field
        color="primary"
        ref="input"
        v-model="userMessage"
        placeholder="SendMessage"
        hide-details
        @keyup.enter="sendMessage"
      >
        <template #prepend-inner>
          <v-icon @click="startRecording">mdi-microphone</v-icon>

          <v-icon @click="stopRecording">mdi-microphone-outline</v-icon>
        </template>

        <template #append-inner>
          <v-icon @click="sendMessage">mdi-send</v-icon>
        </template>
      </v-text-field> -->
    </v-sheet>
  </v-card>
</template>

<style scoped lang="scss">
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
  height: calc(100vh - 340px);
  background-image: url("@/assets/images/chat-bg-2.png");
  background-repeat: repeat;
}

.no-message-container {
  height: calc(100vh - 340px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 2rem;
    font-weight: 500;
  }
}

.bg {
  background-image: url("@/assets/images/chat-bg-2.png");
  background-repeat: repeat;
}
</style>
