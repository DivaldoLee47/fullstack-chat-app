import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://fullstack-chat-app-dodo.vercel.app/api",
  withCredentials: true,
});