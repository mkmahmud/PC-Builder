import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllcategories: builder.query({
      query: () => `/categories`,
    }),
  }),
});

export const { useGetAllcategoriesQuery } = bookApi;
