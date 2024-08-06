import axios from "axios";
import QueryString from "qs";

export const requestJson = axios.create({
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 50000,
});

requestJson.defaults.paramsSerializer = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serialize: (params) => {
    return QueryString.stringify(params, { arrayFormat: "repeat" });
  },
};

requestJson.interceptors.request.use((config) => {
  return config;
});

requestJson.interceptors.response.use((response) => {
  if (response) return response;

  return response;
});
