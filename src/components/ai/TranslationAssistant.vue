<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { createTranscriptionApi } from "@/api/aiApi";
import { useChatStore } from "@/views/app/chat/chatStore";
import CopyBtn from "@/components/common/CopyBtn.vue";
import ApiKeyDialog from "@/views/app/chat/components/ApiKeyDialog.vue";

import { read } from "@/utils/aiUtils";
const chatStore = useChatStore();
const langs = [
  {
    code: "en",
    name: "English",
    label: "English",
  },
  {
    code: "zh-CN",
    name: "Chinese Simplified",
    label: "中文(简体)",
  },
  {
    code: "ja",
    name: "Japanese",
    label: "日本語",
  },
];

const errorMsg = ref("");

const currentLang = ref("en");
const currentLangName = computed(() => {
  return langs.find((lang) => lang.code === currentLang.value)?.name;
});

const baseContent = ref("");
const targetContent = ref("");

const prompt = computed(() => {
  return `Translate into ${currentLangName.value}`;
  //   return `I want you to act as an ${currentLangName.value} translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in ${currentLang.value.name}. I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level ${currentLang.value.name} words and sentences. Keep the meaning same, but make them more literary. I want you to only reply the correction, the improvements and nothing else, do not write explanations.”`;
});

const isLoading = ref(false);
const translate = async () => {
  if (baseContent.value === "") {
    errorMsg.value = "请输入要翻译的内容";
    isBaseContentEmpty.value = true;
    return;
  }

  if (!chatStore.apiKey) {
    errorMsg.value = "请先输入API KEY";
    isBaseContentEmpty.value = true;
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
          messages: [
            { role: "user", content: prompt.value },
            { role: "user", content: baseContent.value },
          ],
          model: "gpt-3.5-turbo",
          stream: true,
        }),
      }
    );

    const reader = completion.body?.getReader();
    if (completion.status !== 200 || !reader) {
      return "error";
    }

    // Read the stream
    read(reader, targetContent);
  } catch (error) {
    // TODO: 处理错误
    console.error("Error:", error);
  }
  isLoading.value = false;
};

const isBaseContentEmpty = ref(false);
const recorder = ref<any>();
const isRecording = ref(false);

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
      isRecording.value = true;
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
        const res = await createTranscriptionApi(formData, chatStore.apiKey);
        baseContent.value = res.data.text;
      };
    })
    .catch((err) => {
      // TODO: 处理错误
      console.log(err);
    });
};

const stopRecording = () => {
  if (recorder.value) {
    recorder.value.stop();
    isRecording.value = false;
  }
};

const record = () => {
  if (isRecording.value) {
    stopRecording();
  } else {
    startRecording();
  }
};
</script>

<template>
  <v-menu location="left bottom" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-btn size="50" v-bind="props">
        <v-icon size="30">mdi-google-translate</v-icon>
        <v-tooltip
          activator="parent"
          location="left"
          text="Translation Assistant"
        ></v-tooltip>
      </v-btn>
    </template>

    <v-sheet elevation="10" height="592" width="800" class="mx-auto">
      <v-row no-gutters justify="center" dense>
        <v-col cols="6">
          <v-card elevation="0">
            <v-card-title style="height: 60px" class="d-flex align-center">
              <span class="text-body-2">检测语言</span>

              <v-spacer></v-spacer>
              <ApiKeyDialog />
              <v-btn
                class="ml-2"
                :loading="isLoading"
                :disabled="isLoading"
                color="primary"
                @click="translate"
                >翻译</v-btn
              >
            </v-card-title>
            <div class="pa-2">
              <v-textarea
                v-model="baseContent"
                hide-details
                variant="outlined"
                rows="15"
                auto-grow
                color="primary"
                clearable
                @focus="isBaseContentEmpty = false"
              ></v-textarea>
            </div>
            <v-card-actions>
              <v-tooltip location="bottom" text="语音输入">
                <template #activator="{ props }">
                  <v-btn @click="record" color="primary" v-bind="props" icon>
                    <v-icon v-if="isRecording">mdi-microphone</v-icon>
                    <v-icon v-else>mdi-microphone-outline</v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
              <v-tooltip location="bottom" text="朗读">
                <template #activator="{ props }">
                  <v-btn color="primary" v-bind="props" icon
                    ><v-icon>mdi-volume-high</v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
              <v-spacer></v-spacer>
              <CopyBtn :text="baseContent" />
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card elevation="0">
            <v-card-title style="height: 60px" class="d-flex align-center">
              <span class="text-body-2">目标语言：</span>
              <v-btn-toggle
                v-model="currentLang"
                density="compact"
                variant="outlined"
                color="primary"
                mandatory
              >
                <v-btn
                  density="compact"
                  size="small"
                  v-for="lang in langs"
                  :value="lang.code"
                >
                  {{ lang.label }}
                </v-btn>
              </v-btn-toggle>
              <!-- <v-menu location="bottom end" scroll-y>
                <template v-slot:activator="{ props }">
                  <v-btn append-icon="mdi-menu-down" v-bind="props">
                    <span class="text-body-2">{{ currentLang.label }}</span>
                  </v-btn>
                </template>
                <v-card>
                  <div v-for="lang in langs">
                    <v-btn block @click="setLang(lang)">{{ lang.label }}</v-btn>
                  </div>
                </v-card>
              </v-menu> -->
              <v-spacer></v-spacer>
            </v-card-title>
            <div class="pa-2">
              <v-textarea
                v-model="targetContent"
                hide-details
                variant="outlined"
                rows="15"
                auto-grow
                color="primary"
                clearable
              ></v-textarea>
            </div>
            <v-card-actions>
              <v-tooltip location="bottom" text="朗读">
                <template #activator="{ props }">
                  <v-btn @click="" color="primary" v-bind="props" icon
                    ><v-icon>mdi-volume-high</v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
              <v-spacer></v-spacer>
              <CopyBtn :text="targetContent" />
            </v-card-actions> </v-card
        ></v-col>
      </v-row>
      <v-alert
        v-model="isBaseContentEmpty"
        color="red"
        theme="dark"
        icon="mdi-alert"
        border
      >
        {{ errorMsg }}
      </v-alert>
    </v-sheet>
  </v-menu>
</template>

<style scoped lang="scss"></style>
