import { configureStore } from "@reduxjs/toolkit";
import forecastSlice from "./forecastSlice";
export const store = configureStore({
  reducer: { forecastSlice },
});
