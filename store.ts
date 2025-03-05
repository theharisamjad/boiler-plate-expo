import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // weather: weatherReducer, // define your reducer here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
