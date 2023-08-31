import { createSlice } from "@reduxjs/toolkit";
const forecastSlice = createSlice({
  name: "forecastSlice",
  initialState: {},
  reducers: {
    setForecast(state, action) {
      state = action.payload;
    },
  },
});

export const {setForecast} = forecastSlice.actions

export default forecastSlice.reducer