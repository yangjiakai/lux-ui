// import Axios library
import axios from "axios";
// Set default validation status for Axios
axios.defaults.validateStatus = function (status) {
  // Return true if status is between 200 and 300 inclusive
  return status >= 200 && status < 300;
};
// Create a new Axios instance with base URL and timeout
const diffusion = axios.create({
  baseURL: "/sdApi",
  //   baseURL: 'http://127.0.0.1:7861',
  timeout: 100000,
});

// 添加请求拦截器
diffusion.interceptors.request.use();

// 添加响应拦截器
diffusion.interceptors.response.use();

//getmodels

//txt2img
export const txt2imgApi = (data: any) => {
  return diffusion.post("/sdapi/v1/txt2img", data);
};
//img2img
export const img2imgApi = (data: any) => {
  return diffusion.post("/sdapi/v1/img2img", data);
};

//getProgeress
export const getProgressApi = (data: any) => {
  return diffusion.get("/sdapi/v1/progress");
};
//getSamplers
export const getSamplersApi = () => {
  return diffusion.get("/sdapi/v1/samplers");
};
