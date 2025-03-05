import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./features/exampleSlice";

export const store = configureStore({
  reducer: {
    example: exampleReducer, // define your reducer here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
