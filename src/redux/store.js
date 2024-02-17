import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./greenSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})