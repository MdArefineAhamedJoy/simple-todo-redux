import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const basedApi = createApi({
  reducerPath: "basedApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTodoQuery } = basedApi;
