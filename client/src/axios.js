import axios from "axios";

export const makeRequest = axios.create({
  baseURL: 'https://airport-p17a.onrender.com/api',
  withCredentials: true,
});