import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-tst-w9lv.onrender.com",
});

export default api;
