import axios from "axios";
// require("dotenv").config();

console.log(process.env);

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
  getLinks() {
    // every return is added onto baseURL
    return apiClient.get("/links?populate=*&sort[0]=clicks%3Adesc");
  },
  getLink(id) {
    return apiClient.get(`/links/${id}?populate=*`);
  },
  postLink(link) {
    return apiClient.post("/links", { data: link });
  },
  putLink(link) {
    console.log("putLink: ", link);
    return apiClient.put(`/links/${link.id}`, { data: link });
  },
  // putLink(id, link) {
  //   console.log("putLink: ", link);
  //   return apiClient.put(`/links/${id}`, { id, data: link });
  // },
  deleteLink(id) {
    return apiClient.delete(`/links/${id}`);
  },
  postUrlForMetaData(url) {
    return apiClient.post("/urldata", { url });
  },
};
