import { defineStore } from "pinia";

type MessageType = "" | "info" | "success" | "error" | "warning";

export const useSnackbarStore = defineStore({
  id: "snackbarStore",
  state: () => ({
    isShow: false,
    message: "",
    type: "",
  }),

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: [""] }],
  },

  getters: {},
  actions: {
    showMessage(message: MessageType) {
      this.isShow = true;
      this.message = message;
      this.type = "";
    },

    showErrorMessage(message: MessageType) {
      this.isShow = true;
      this.message = message;
      this.type = "error";
    },
    showSuccessMessage(message: MessageType) {
      this.isShow = true;
      this.message = message;
      this.type = "success";
    },
    showInfoMessage(message: MessageType) {
      this.isShow = true;
      this.message = message;
      this.type = "info";
    },
    showWarningMessage(message: MessageType) {
      this.isShow = true;
      this.message = message;
      this.type = "warning";
    },
  },
});
