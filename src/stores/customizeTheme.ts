import { defineStore } from "pinia";

interface State {
  miniSidebar: boolean;
  darkTheme: boolean;
}

export const useCustomizeThemeStore = defineStore({
  id: "customizeTheme",
  state: (): State => ({
    miniSidebar: false,
    darkTheme: false,
  }),

  getters: {},
  actions: {
    setMiniSideBar(payload: boolean) {
      this.miniSidebar = payload;
    },
  },
});
