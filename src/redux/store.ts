import { configureStore } from "@reduxjs/toolkit";
import { api } from "./features/api/apiSlice";
import pcbuilder from "./features/pcBuilder/pcBuilder";

const store = configureStore({
  reducer: {
    pcComponent: pcbuilder,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
