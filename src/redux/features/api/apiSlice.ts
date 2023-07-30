import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fokira-server-mahmudulmk4-gmailcom.vercel.app",
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
