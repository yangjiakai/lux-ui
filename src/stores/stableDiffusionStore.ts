import { defineStore } from "pinia";

export const useStableDiffusionStore = defineStore({
  id: "stableDiffusion",
  state: () => ({
    imgList: [],
    modelList: [],
    currentModel: "",
  }),

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: [""] }],
  },

  getters: {},
  actions: {
    updateImgList(imgList: []) {
      this.imgList = imgList;
    },

    updateModelList(modelList: []) {
      this.modelList = modelList;
    },
  },
});
