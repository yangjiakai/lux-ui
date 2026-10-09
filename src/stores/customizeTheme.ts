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

export const useCustomizeThemeStore = defineStore("customizeTheme", {
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
    pick: ["darkTheme", "primaryColor", "localCode", "mainSidebar"],
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
