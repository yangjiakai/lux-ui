import { defineStore } from "pinia";

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    theme: 'light',
    mainSidebar: true,
  }),

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ["theme"], }],
  },

  getters: {},
  actions: {
    toggleSidebar() {
      this.mainSidebar = !this.mainSidebar
    },

    setTheme(theme: string) {
      this.theme = theme
    }
  },
});
