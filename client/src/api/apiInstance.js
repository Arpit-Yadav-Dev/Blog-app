import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("authToken"),
  },
});

export default apiInstance;
