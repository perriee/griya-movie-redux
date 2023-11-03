import { useQuery } from "@tanstack/react-query";
import { httpbinar } from "../utils/Http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const fetchDataSearch = async ({ queryKey }) => {
  const [_key, _params] = queryKey;

  const { data } = await httpbinar.get(_key, { params: _params });
  return data;
};

const useDataQuerySearch = (options) => {
  return useQuery([API_ENDPOINT.GET_SEARCH, options], fetchDataSearch);
};

export { fetchDataSearch, useDataQuerySearch };
