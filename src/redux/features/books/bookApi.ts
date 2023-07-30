import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllbooks: builder.query({
      query: ({ search, filters }) => `/book/?searchTerm=${search}&${filters}`,
      providesTags: ["books"],
    }),
    getTopTenBook: builder.query({
      query: () => "/book/?page=1&limit=10&sortOrder=desc",
      providesTags: ["books"],
    }),
    getSingelBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    createBook: builder.mutation({
      query: (data) => ({
        url: "/book/create-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetAllbooksQuery,
  useGetTopTenBookQuery,
  useCreateBookMutation,
  useGetSingelBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
