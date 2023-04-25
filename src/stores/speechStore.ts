import { defineStore } from "pinia";
import {
  AudioConfig,
  SpeakerAudioDestination,
  SpeechConfig,
  SpeechSynthesisOutputFormat,
  ResultReason,
  SpeechSynthesizer,
} from "microsoft-cognitiveservices-speech-sdk";

export const useSpeechStore = defineStore({
  id: "speech",
  state: () => ({
    subscriptionKey: import.meta.env.VITE_TTS_KEY,
    region: import.meta.env.VITE_TTS_REGION || "eastus",
    speechRecognitionLanguage: "en-US",
    speechSynthesisLanguage: ref("en-US"),
    speechSynthesisVoiceName: ref("en-US-JessaNeural"),
    speechRate: 1,
    isPlaying: false,
  }),

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: [] }],
  },

  getters: {},
  actions: {
    async textToSpeech(text: string) {
      this.isPlaying = true;
      const speechConfig = SpeechConfig.fromSubscription(
        this.subscriptionKey,
        this.region
      );
      speechConfig.speechRecognitionLanguage = this.speechRecognitionLanguage;
      speechConfig.speechSynthesisLanguage = this.speechSynthesisLanguage;
      speechConfig.speechSynthesisVoiceName = this.speechSynthesisVoiceName;

      // 设置输出音频格式
      speechConfig.speechSynthesisOutputFormat =
        SpeechSynthesisOutputFormat.Audio16Khz32KBitRateMonoMp3;

      // 通过playback结束事件来判断播放结束
      const player = new SpeakerAudioDestination();
      player.onAudioStart = function (_) {
        // 在开始语音合成之前设置为 true
      };
      let _this = this;
      player.onAudioEnd = function (_) {
        _this.isPlaying = false;
        console.log("playback finished");
      };

      const audioConfiga = AudioConfig.fromSpeakerOutput(player);

      // 创建一个语音合成器
      const synthesizer = new SpeechSynthesizer(speechConfig, audioConfiga);

      // 将文本转换为语音
      try {
        const result = await new Promise((resolve, reject) => {
          synthesizer.speakTextAsync(
            text,
            (speechResult) => {
              if (
                speechResult.reason === ResultReason.SynthesizingAudioCompleted
              ) {
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
              reject(error);
            }
          );
        });

        // 处理语音合成结果，例如播放音频或将其发送到客户端
        console.log("Text-to-speech synthesis result:", result);
      } catch (error) {
        console.error("Error during text-to-speech synthesis:", error);
      } finally {
        // 关闭语音合成器以释放资源
        synthesizer.close();
      }
    },
  },
});
