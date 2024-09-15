import axios from "axios";
import { Image } from "../types";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "HfYBa1KQn2ueT9q36IJXu8vZr-JdVnbbkdLUim2_q3M";

interface ApiResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

interface Params {
  client_id: string;
  query: string;
  page: number;
  per_page: number;
}

export async function getData(
  query: string,
  page: number = 1
): Promise<ApiResponse> {
  const { data } = await axios.get<ApiResponse>(`/search/photos`, {
    params: <Params>{
      client_id: ACCESS_KEY,
      query,
      page,
      per_page: 16,
    },
  });
  return data;
}
