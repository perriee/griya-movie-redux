import { useQuery } from "@tanstack/react-query";
import http from "../utils/Http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const fetchDataPopular = async ({ queryKey }) => {
  const [_key, _params] = queryKey;

  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useDataQueryPopular = (options) => {
  return useQuery([API_ENDPOINT.GET_POPULAR, options], fetchDataPopular);
};

export { fetchDataPopular, useDataQueryPopular };
