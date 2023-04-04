import axios from "axios";

const gptInstance = axios.create({
  baseURL: "https://api.openai.com",
  timeout: 100000,
});

gptInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("请求异常：" + JSON.stringify(error));
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
