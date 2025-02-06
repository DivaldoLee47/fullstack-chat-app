export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:5001/api" 
    : "https://fullstack-chat-app-uoat-divaldolee47s-projects.vercel.app/api", // Replace with your actual backend URL
  withCredentials: true,
});