import {createSlice} from '@reduxjs/toolkit';
const forecastSlice = createSlice({
  name: 'forecastSlice',
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

export const {setForecastInfo} = forecastSlice.actions;

export default forecastSlice.reducer;
