import { configureStore } from "@reduxjs/toolkit";
import trainsSlice from "./slices/trainsSlice";



export const store = configureStore({
  reducer: {
    trains : trainsSlice
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch