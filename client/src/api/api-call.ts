import axios from "axios";

export const apiCall = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
});
