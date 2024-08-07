import axiosDefault from "axios";

const isProduction = import.meta.env.VITE_IS_PROD === "YES";

const baseURL = isProduction ? "https://www.gcp.com/" : "http://localhost:8080/";

const defaultOptions = {
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
};

const api = axiosDefault.create(defaultOptions);

export default api;
