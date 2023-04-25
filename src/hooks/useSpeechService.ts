import type { VoiceInfo } from "microsoft-cognitiveservices-speech-sdk";
import { useSpeechStore } from "@/stores/speechStore";
import {
  AudioConfig,
  SpeechSynthesisOutputFormat,
  SpeakerAudioDestination,
  SpeechConfig,
  SpeechSynthesizer,
  ResultReason,
} from "microsoft-cognitiveservices-speech-sdk";

interface Config {
  langs?: readonly [
    "fr-FR",
    "ja-JP",
    "en-US",
    "zh-CN",
    "zh-HK",
    "ko-KR",
    "de-DE"
  ];
  isFetchAllVoice?: boolean;
}

export function useSpeechService() {
  const speechStore = useSpeechStore();

  // 使用speechStore中的speechConfig
  const player = new SpeakerAudioDestination();
  player.onAudioStart = function (_) {
    // 在开始语音合成之前设置为 true
    // state.isPlaying = true;
    console.log("playback started");
  };
  player.onAudioEnd = function (_) {
    // state.isPlaying = false;
    console.log("playback finished");
  };

  const audioConfiga = AudioConfig.fromSpeakerOutput(player);

  const speechConfig = SpeechConfig.fromSubscription(
    import.meta.env.VITE_TTS_KEY,
    import.meta.env.VITE_TTS_REGION
  );

  // 设置输出音频格式
  speechConfig.speechSynthesisOutputFormat =
    SpeechSynthesisOutputFormat.Audio16Khz32KBitRateMonoMp3;
  const synthesizer = new SpeechSynthesizer(speechConfig, audioConfiga);

  async function textToSpeech(text: string) {
    try {
      const result = await new Promise((resolve, reject) => {
        synthesizer;
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

      return result;
    } catch (error) {
      console.error("Error during text-to-speech synthesis:", error);
      throw error;
    } finally {
      // 关闭语音合成器以释放资源
      synthesizer.close();
    }
  }

  // 获取语音列表
  const getVoices = async (): Promise<VoiceInfo[]> => {
    const res = await synthesizer.getVoicesAsync();
    return res.voices;
  };

  return {
    textToSpeech,
    getVoices,
  };
}
