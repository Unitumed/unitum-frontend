import axios from "axios";

export const API = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.API
      : "http://localhost:8080/api/"
});
