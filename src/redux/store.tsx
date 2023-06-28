import { configureStore } from "@reduxjs/toolkit";
import { generalSlice } from "./general";

export const store = configureStore({
  reducer: {
    [generalSlice.name]: generalSlice.reducer,
  },
  devTools: true,
});
