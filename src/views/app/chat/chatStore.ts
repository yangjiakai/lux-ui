import { defineStore } from "pinia";
import type { Message, User } from "./chatTypes";

export const useChatStore = defineStore({
  id: "chat",
  state: () => ({
    chatHistory: ref<Message[]>([]),
  }),

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ["chatHistory"] }],
  },

  getters: {},
  actions: {
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
