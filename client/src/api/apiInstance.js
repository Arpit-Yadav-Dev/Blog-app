import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: localStorage.getItem("authToken"),
  },
});

export default apiInstance;
