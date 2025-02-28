import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { getTimezones } from "../api/timezones";
import { TimeItem } from "../models/time-item";

type TimezoneSliceState = {
  timezones: null | Array<TimeItem>
  loading: boolean
  error: unknown
}

const initialState: TimezoneSliceState = {
  timezones: null,
  loading: false,
  error: null
};

export const getTimezonesThunk = createAsyncThunk('getTimezones', async (_, {rejectWithValue}) => {
  try {
    const r = await getTimezones()
    return r
  } catch (error: unknown) {
      return rejectWithValue(error)
  }
})

const timezoneSlice = createSlice({
  name: "timezone",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(getTimezonesThunk.pending, (state) => {
        Object.assign(state, initialState)
        state.loading = true
      })
      builder.addCase(getTimezonesThunk.fulfilled, (state, action) => {
        state.loading = false
        state.timezones = action.payload
      })
      builder.addCase(getTimezonesThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error
      })
  },
  selectors: {
    getTimezoneList: (state) => state.timezones ?? [],
    getTimezoneLoading: (state) => state.error,
    getTimezoneError: (state) => state.loading,
  }
});

export const {
  actions: timezoneActions,
  reducer: timezoneReducer,
  selectors: timezoneSelectors
} = timezoneSlice
