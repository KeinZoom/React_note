import axios from "axios";
import { getToken, removeToken } from "./token";
import { Navigate } from "react-router-dom";
import router from "@/router";

const request = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      removeToken();
      router.navigate("/login");
      window.location.reload(); // 修复不跳转bug，强制刷新
    }
    return Promise.reject(error);
  }
);

export default request;
