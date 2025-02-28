import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { timezoneReducer } from "./timezoneSlice";

const rootReducer = combineReducers({
  timezone: timezoneReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store['dispatch']
