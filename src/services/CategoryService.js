import axios from "axios";
require("dotenv").config();

// apiClient is a Single Axios instance for our app
const apiClient = axios.create({
  // Base URL for all calls to use
  // baseURL: "http://localhost:1337/api",
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: false,
  headers: {
    // For authentication & configuaration
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getCategories() {
    // every return is added onto baseURL
    return apiClient.get("/categories");
  },
  getCategory(id) {
    return apiClient.get(`/categories/${id}`);
  },
};
