import axios from "axios";

const token = localStorage.getItem("Authorization");

export const api = axios.create({
  baseURL: "http://localhost:3001/users",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
