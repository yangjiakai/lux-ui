import { defineStore } from "pinia";

export const useChatGPTStore = defineStore({
  id: "chatGPT",
  state: () => ({
    propmpt: "",
    configDialog: false,
    apiKey: "",
    model: "gpt-3.5-turbo",
  }),

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ["propmpt"] }],
  },

  getters: {
    // If you have set up an API key, please use your own key. If not, please use the one I provided.
    getApiKey: (state) => state.apiKey || import.meta.env.VITE_OPENAI_API_KEY,
  },
  actions: {
    updatePropmpt() {},
    updateModel(model: string) {
      this.model = model;
    },
  },
});
