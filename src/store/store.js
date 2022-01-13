import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import timezonesReducer from "./timezoneSlice";

export const store = configureStore({
  reducer: {
    timezones: timezonesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const useAppDispatch = () => useDispatch();
