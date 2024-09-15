import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "HfYBa1KQn2ueT9q36IJXu8vZr-JdVnbbkdLUim2_q3M";

interface Params {
  client_id: string;
  query: string;
  page: number;
  per_page: number;
}

export async function getData<T>(query: string, page = 1): Promise<T> {
  const { data } = await axios.get(`/search/photos`, {
    params: <Params>{
      client_id: ACCESS_KEY,
      query: query,
      page,
      per_page: 16,
    },
  });
  return data as T;
}
