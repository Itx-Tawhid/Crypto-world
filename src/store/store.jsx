import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/CryptoApi.jsx";

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware), // ✅ Add this
});
