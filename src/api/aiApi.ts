import axios from "axios";
import { useSnackbarStore } from "@/stores/snackbarStore";
import { useChatGPTStore } from "@/stores/chatGPTStore";

const gptInstance = axios.create({
  timeout: 100000,
});

gptInstance.interceptors.request.use((config) => {
  const chatGPTStore = useChatGPTStore();
  config.baseURL = chatGPTStore.proxyUrl;
  return config;
});


gptInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const snackbarStore = useSnackbarStore();
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;
      snackbarStore.showErrorMessage(data.error);
    } else {
      snackbarStore.showErrorMessage("Network Error");
    }
    return Promise.reject(error);
  }
);

// Get all models.
export const getModelsApi = (apiKey: string) => {
  return gptInstance.get("/v1/models", {
    headers: {
      Authorization: "Bearer " + apiKey,
    },
  });
};

// Get account balance information.
export const getBalanceApi = (apiKey: string) => {
  return gptInstance.get("/dashboard/billing/credit_grants", {
    headers: {
      Authorization: "Bearer " + apiKey,
    },
  });
};

// speech-to-text
export const createTranscriptionApi = (formData: any, apiKey: string) => {
  return gptInstance.post("/v1/audio/transcriptions", formData, {
    headers: {
      Authorization: "Bearer " + apiKey,
    },
  });
};

// completions(Stream UnUsed)
export const createCompletionApi = (data: any, apiKey: string) => {
  return gptInstance.post("/v1/chat/completions", data, {
    headers: {
      Authorization: "Bearer " + apiKey,
    },
  });
};
