import {createSlice} from '@reduxjs/toolkit';
const forecastInfoSlice = createSlice({
  name: 'forecastInfoSlice',
  initialState: {
    location: {},
    current: {},
    forecast: {},
  },
  reducers: {
    setForecastInfo(state, action) {
      state = action.payload;
    },
  },
});

export const {setForecastInfo} = forecastInfoSlice.actions;

export default forecastInfoSlice.reducer;
