import axios from "axios";

// apiClient is a Single Axios instance for our app
const apiClient = axios.create({
  // Base URL for all calls to use
  baseURL: "http://localhost:1337/api",
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
    return apiClient.get("/links?populate=*");
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
  deleteLink(id) {
    return apiClient.delete(`/links/${id}`);
  },
  postUrlForMetaData(url) {
    return apiClient.post("/urldata", { url });
  },
};
