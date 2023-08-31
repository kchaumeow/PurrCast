import axios from "axios";
import { store } from "./store/store";
import { setForecast } from "./store/forecastSlice";
const api_location_base_url = import.meta.env.VITE_API_LOCATION_REQUEST_URL;
const api_get_ip_url = import.meta.env.VITE_API_GET_IP_URL;
export async function getLocationViaIP() {
  const ip = await axios.get(api_get_ip_url);
  const location = await axios.get(
    `${api_location_base_url}&q=${ip}&days=3&aqi=no&alerts=no`
  );
  store.dispatch(setForecast(location));
}

export async function getLocationViaCoords() {
  getLocationPromisified()
    .then((position) => {
      return axios.get(
        `${api_location_base_url}&q=${position.coords.latitude},${position.coords.longitude}&days=3&aqi=no&alerts=no`
      );
    })
    .then((result) => {
      store.dispatch(setForecast(result.data));
    });
}

function getLocationPromisified() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (err) => {
        reject(err);
      }
    );
  });
}
