<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useSpeechStore } from "@/stores/speechStore";
import type { VoiceInfo } from "microsoft-cognitiveservices-speech-sdk";
import { useSpeechService } from "@/hooks/useSpeechService";
const { getVoices } = useSpeechService();
const speechStore = useSpeechStore();

const allVoices = ref<VoiceInfo[]>([]);
const selectVoice = (voiceInfo: VoiceInfo) => {
  speechStore.updateVoiceInfo(voiceInfo);
};

const languages = ref(["ja-JP", "en-US", "zh-CN", "zh-HK"]);
const getVoiceInfo = async () => {
  const res = await getVoices();
  allVoices.value = res.filter((voice) =>
    languages.value.includes(voice.locale)
  );
  // fr-FR 法语 ja-JP 日语 en-US 英语 zh-CN 中文 zh-HK 粤语 ko-KR 韩语 de-DE 德语
};

onMounted(() => {
  getVoiceInfo();
});
</script>

<template>
  <v-btn color="primary" icon @click="speechStore.voiceConfigDialog = true">
    <v-icon size="30">mdi-cog-outline</v-icon>
    <v-tooltip
      activator="parent"
      location="top"
      text="Voice Config"
    ></v-tooltip>
  </v-btn>

  <v-dialog v-model="speechStore.voiceConfigDialog" width="500">
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12">
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
                    </div>
                  </v-list-item>
                </RecycleScroller>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn
          color="primary"
          block
          @click="speechStore.voiceConfigDialog = false"
          >Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">
.scroller {
  height: 400px;
}
</style>
