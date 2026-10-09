import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    theme: 'light',
    mainSidebar: true,
  }),

  persist: {
    pick: ["theme"],
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
