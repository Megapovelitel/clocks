import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timezones: null,
};

const timezones = createSlice({
  name: "timezones",
  initialState,
  reducers: {
    setTimezones: (state, action) => {
      state.timezones = action.payload;
    },
  },
});


export const { setTimezones } = timezones.actions;
export default timezones.reducer;
