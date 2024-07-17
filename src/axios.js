import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:7223/",
  timeout: 5000,
});

export default instance;
