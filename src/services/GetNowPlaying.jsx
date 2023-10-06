import { useQuery } from "@tanstack/react-query";
import http from "../utils/Http";
import { API_ENDPOINT } from "../utils/api-endpoint";

// CARA 4
const fecthDataNowPlaying = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useDataQueryNowPlaying = (options) => {
  return useQuery([API_ENDPOINT.GET_NOW_PLAYING, options], fecthDataNowPlaying);
};

// CARA 3
// const fecthDataNowPlaying = async (page) => {
//   const { data } = await http.get(
//     `${API_ENDPOINT.GET_NOW_PLAYING}?page=${page ? page : 1}`
//   );
//   return data;
// };

// const useDataQueryNowPlaying = (page) => {
//   return useQuery([API_ENDPOINT.GET_NOW_PLAYING, page], () =>
//     fecthDataNowPlaying(page)
//   );
// };

export { fecthDataNowPlaying, useDataQueryNowPlaying };
