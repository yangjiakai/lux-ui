import { defineStore } from "pinia";
import type { Message, User } from "./chatTypes";

export const useChatStore = defineStore({
  id: "chat",
  state: () => ({
    apiKey: "",
    chatHistory: [],
  }),

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ["chatHistory", "apiKey"] }],
  },

  getters: {
    getChatHistory() {
      return this.chatHistory;
    },
  },
  actions: {
    saveApiKey(key: string) {
      this.apiKey = key;
    },

    addToHistory(payload: Message) {
      this.chatHistory.push(payload);
    },
    clearHistory() {
      this.chatHistory = [];
    },
    // 移除最后一条临时信息
    removeLatestMessage() {
      this.chatHistory.pop();
    },
  },
});
