<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import type { VoiceInfo } from "microsoft-cognitiveservices-speech-sdk";
import { useSpeechService } from "@/hooks/useSpeechService";
import { useSpeechStore } from "@/stores/speechStore";
const speechStore = useSpeechStore();
// import { supportLanguageMap } from "@/configs/azure";

// const currentLang = ref("en-US");

const subscriptionKey = ref(import.meta.env.VITE_TTS_KEY);
const region = ref("eastus");

// 创建语音配置对象
const speechConfig = sdk.SpeechConfig.fromSubscription(
  subscriptionKey.value,
  region.value
);

// 设置输出音频格式
speechConfig.speechSynthesisOutputFormat =
  sdk.SpeechSynthesisOutputFormat.Audio16Khz32KBitRateMonoMp3;

// 创建一个语音合成器
const synthesizer = new sdk.SpeechSynthesizer(speechConfig);

// async function textToSpeech(text) {
//   console.log("textToSpeech");
//   console.log("text", text);
//   console.log("subscriptionKey", subscriptionKey);
//   console.log("region", region);

//   // 将文本转换为语音
//   try {
//     const result = await new Promise((resolve, reject) => {
//       synthesizer.speakTextAsync(
//         text,
//         (speechResult) => {
//           if (
//             speechResult.reason === sdk.ResultReason.SynthesizingAudioCompleted
//           ) {
//             resolve(speechResult);
//           } else {
//             reject(
//               new Error(
//                 `Speech synthesis failed with reason: ${speechResult.reason}`
//               )
//             );
//           }
//         },
//         (error) => {
//           reject(error);
//         }
//       );
//     });

//     // 处理语音合成结果，例如播放音频或将其发送到客户端
//     console.log("Text-to-speech synthesis result:", result);
//   } catch (error) {
//     console.error("Error during text-to-speech synthesis:", error);
//   } finally {
//     // 关闭语音合成器以释放资源
//     synthesizer.close();
//   }
// }

const text = ref("Hello, this is an example of text-to-speech synthesis.");

const languages = ref([
  "fr-FR",
  "ja-JP",
  "en-US",
  "zh-CN",
  "zh-HK",
  "ko-KR",
  "de-DE",
]);

const allVoices = ref<VoiceInfo[]>([]);

// 获取语音列表
const getVoices = async () => {
  const res = await synthesizer.getVoicesAsync();
  allVoices.value = res.voices.filter((voice) =>
    languages.value.includes(voice.locale)
  );

  // fr-FR 法语 ja-JP 日语 en-US 英语 zh-CN 中文 zh-HK 粤语 ko-KR 韩语 de-DE 德语

  console.log("allVoices", allVoices.value);
};

const { textToSpeech } = useSpeechService();

async function handleTextToSpeech(text: string) {
  try {
    await textToSpeech(text);
    console.log("Start");
  } catch (error) {
    console.error("Error during text-to-speech:", error);
  } finally {
    console.log("End");
  }
}
</script>

<template>
  <div class="pa-5">
    text-sm-center
    <v-text-field name="name" label="label" id="id"></v-text-field>
    <v-btn color="success" @click="textToSpeech(text)">说话</v-btn>
    <v-btn color="success" @click="getVoices">获取VoiceInfo</v-btn>
    <v-btn color="success" @click="handleTextToSpeech('hello world ')"
      >text</v-btn
    >
    <v-btn color="success" @click="speechStore.textToSpeech('hello world ')">
      too
    </v-btn>

    <v-icon v-if="speechStore.isPlaying">mdi-home</v-icon>

    <v-btn
      @click="speechStore.updateIsPlaying()"
      :color="speechStore.isPlaying ? 'green' : 'error'"
      >{{ speechStore.isPlaying }}</v-btn
    >

    <v-divider></v-divider>
    <v-row>
      <v-col
        class="6"
        md="4"
        lg="3"
        v-for="voiceInfo in allVoices"
        :key="voiceInfo.name"
      >
        <v-card>
          <v-card-title>
            <div>
              {{ voiceInfo.localName }}
              <v-avatar v-if="voiceInfo.gender === 1" size="30" color="red">
                <img
                  src="https://img.icons8.com/bubbles/50/null/lock-female-user.png"
                />
              </v-avatar>
              <v-avatar v-else size="30" color="blue">
                <img
                  src="https://img.icons8.com/bubbles/50/null/user-male.png"
                />
              </v-avatar>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div>{{ voiceInfo.name }}</div>
            <div>
              <v-chip class="font-weight-bold" color="blue">{{
                voiceInfo.locale
              }}</v-chip>
            </div>
            <div class="font-weight-bold">{{ voiceInfo.shortName }}</div>

            <!-- <div>{{ voiceInfo.voiceType }}</div> -->
            <div v-if="voiceInfo.styleList.length > 0">
              <v-select
                density="compact"
                :items="voiceInfo.styleList"
                label="style"
              ></v-select>
            </div>

            <!-- <div>{{ voiceInfo.voicePath }}</div> -->
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss"></style>
