import axios from "axios";
import { DIRECTUS_URL } from "@/constants/url";

export const axiosInstance = axios.create({
  baseURL: DIRECTUS_URL,
});
