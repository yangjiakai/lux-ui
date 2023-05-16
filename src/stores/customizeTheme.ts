import { defineStore } from "pinia";

interface Color {
  colorId: number;
  colorName: string;
  colorValue: string;
}

interface State {
  miniSidebar: boolean;
  darkTheme: boolean;
  primaryColor: Color;
  mainSidebar: boolean;
  localCode: string;
}

export const useCustomizeThemeStore = defineStore({
  id: "customizeTheme",
  state: (): State => ({
    miniSidebar: false,
    darkTheme: false,
    primaryColor: {
      colorId: 2,
      colorName: "grey",
      colorValue: "#344767",
    },
    localCode: "en",
    mainSidebar: true,
    // mainSidebar: isMobile() ? false : true,
  }),

  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ["darkTheme", "primaryColor", "localCode", "mainSidebar"],
      },
    ],
  },

  getters: {},
  actions: {
    setMiniSideBar(payload: boolean) {
      this.miniSidebar = payload;
    },
    setPrimaryColor(payload: Color) {
      this.primaryColor = payload;
    },
    setLocalCode(localCode: string) {
      this.localCode = localCode;
    },
  },
});
