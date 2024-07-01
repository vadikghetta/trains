import { configureStore } from "@reduxjs/toolkit";
import trainsSlice from "./slices/trainsSlice";
import errorSlice from "./slices/errorSlice";



export const store = configureStore({
  reducer: {
    trains : trainsSlice,
    errors : errorSlice
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch