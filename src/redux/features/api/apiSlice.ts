import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://book-catalog-backend-mahmudulmk4-gmailcom.vercel.app/api/v1",
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
