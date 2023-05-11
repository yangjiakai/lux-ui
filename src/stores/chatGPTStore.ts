import { defineStore } from "pinia";

export const useChatGPTStore = defineStore({
  id: "chatGPT",
  state: () => ({
    propmpt: "",
    configDialog: false,
    apiKey: "",
  }),

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ["propmpt"] }],
  },

  getters: {
    // If you have set up an API key, please use your own key. If not, please use the one I provided.
    getApiKey: (state) => state.apiKey || import.meta.env.VITE_OPENAI_API_KEY,
  },
  actions: {},
});
