import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        "x-rapidapi-key",
        "ff5fa08827msh1e85fcec5f8b491p1d3581jsna1a7f7d26eaf"
      );
      headers.set("x-rapidapi-host", "coinranking1.p.rapidapi.com");

      const token = getState()?.auth?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => "/coins",
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
