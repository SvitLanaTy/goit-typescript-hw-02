import axios from "axios";

export async function getData(query, page = 1) {
  const BASE_URL = "https://api.unsplash.com";
  const END_POINT = "/search/photos";
  const url = BASE_URL + END_POINT;
  const params = {
    client_id: "HfYBa1KQn2ueT9q36IJXu8vZr-JdVnbbkdLUim2_q3M",
    query: query,
    page: page,
    per_page: 16,
  };

  const { data } = await axios.get(url, { params });
  return data;
}

