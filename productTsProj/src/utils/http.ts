import axios from "axios";
axios.request
const requireInstance = axios.create({
  baseURL: "https://dummyjson.com/products",
  timeout: 5000,
});

requireInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

requireInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default requireInstance;
