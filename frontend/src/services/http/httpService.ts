import axios from "axios";
import { API_BASE_URL, TIMEOUT } from "@/utils/constants";

const http = axios.create({
  baseURL: API_BASE_URL,
  timeout: Number(TIMEOUT),
});

http.interceptors.request.use((request) => {
  if (request && request.headers) {
    const token = localStorage.getItem("token");
    if (token && token !== "") {
      request.headers.Authorization = token;
    }
  }
  return request;
});

http.interceptors.response.use((response) => {
  return response;
});

export { http };
