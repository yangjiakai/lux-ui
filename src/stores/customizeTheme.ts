import { defineStore } from "pinia";

interface State {
  miniSidebar: boolean;
  darkTheme: boolean;
  primaryColor: string;
}

export const useCustomizeThemeStore = defineStore({
  id: "customizeTheme",
  state: (): State => ({
    miniSidebar: false,
    darkTheme: false,
    primaryColor: "grey",
  }),

  getters: {},
  actions: {
    setMiniSideBar(payload: boolean) {
      this.miniSidebar = payload;
    },
    setPrimaryColor(payload: string) {
      this.primaryColor = payload;
    },
  },
});
