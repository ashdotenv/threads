import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "./slice";
import { serviceApi } from "./service";

export const store = configureStore({
  reducer: {
    service: serviceSlice,
    [serviceApi.reducerPath]: serviceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      serviceApi.middleware
    ),
});
