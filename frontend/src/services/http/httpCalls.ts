import axios from "axios";

const http = axios.create({
  baseURL: process.env.BACKEND_BASE_URL,
  timeout: Number(process.env.TIMEOUT),
});

http.interceptors.request.use((request) => {
  if (request && request.headers) {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      request.headers.Authorization = token;
    }
  }
  return request;
});

http.interceptors.response.use((response) => {
  return response;
});

export { http };
