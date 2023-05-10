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

const languages = ref(["ja-JP", "en-US", "zh-CN", "zh-HK"]);

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

onMounted(() => {
  getVoices();
});

const selectVoice = (voiceInfo: VoiceInfo) => {
  speechStore.updateVoiceInfo(voiceInfo);
};
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

    <v-btn :color="speechStore.isPlaying ? 'green' : 'error'">{{
      speechStore.isPlaying
    }}</v-btn>

    <v-divider class="mb-10"></v-divider>

    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card>
            <v-list elevation="1" density="compact">
              <v-list-subheader
                >Total {{ allVoices.length }} Voices</v-list-subheader
              >
              <RecycleScroller
                class="scroller"
                :items="allVoices"
                :item-size="50"
                key-field="name"
                v-slot="{ item }"
              >
                <v-list-item
                  active-color="primary"
                  @click="selectVoice(item)"
                  :active="
                    item.shortName === speechStore.speechSynthesisVoiceName
                  "
                  three-line
                >
                  <!-- ---------------------------------------------- -->
                  <!-- Prepend-->
                  <!-- ---------------------------------------------- -->
                  <template v-slot:prepend>
                    <!-- <span class="mr-3">{{ item.id }}</span> -->
                    <v-avatar v-if="item.gender === 1" size="30" color="red">
                      <img
                        src="https://img.icons8.com/bubbles/50/null/lock-female-user.png"
                      />
                    </v-avatar>
                    <v-avatar v-else size="30" color="blue">
                      <img
                        src="https://img.icons8.com/bubbles/50/null/user-male.png"
                      />
                    </v-avatar>
                  </template>
                  <!-- ---------------------------------------------- -->
                  <!-- Append-->
                  <!-- ---------------------------------------------- -->
                  <template v-slot:append>
                    <div class="full-h d-flex align-center">
                      <span class="text-body-2 text-grey">
                        <v-chip
                          size="small"
                          class="font-weight-bold"
                          color="blue"
                          >{{ item.locale }}</v-chip
                        >
                      </span>
                    </div>
                  </template>
                  <!-- ---------------------------------------------- -->
                  <!-- Main Content-->
                  <!-- ---------------------------------------------- -->
                  <div>
                    <v-list-item-title class="font-weight-bold text-primary"
                      >{{ item.localName }}
                      <span class="text-body-2 ml-2"
                        >({{ item.shortName }})</span
                      ></v-list-item-title
                    >
                    <v-list-item-subtitle>{{ item.name }}</v-list-item-subtitle>
                  </div>
                </v-list-item>
              </RecycleScroller>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.scroller {
  height: 400px;
}
</style>
