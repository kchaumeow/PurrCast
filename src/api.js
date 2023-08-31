import axios from 'axios';
import {store} from './store/store';
import {setForecastInfo} from './store/forecastSlice';
// constants for requests
const API_LOCATION_BASE_URL = import.meta.env.VITE_API_LOCATION_REQUEST_URL;
const API_GET_IP_URL = import.meta.env.VITE_API_GET_IP_URL;

export function setForecastInfoToStore(location) {
  store.dispatch(setForecastInfo(location));
}

export async function getLocationViaIP() {
  const ip = await axios.get(API_GET_IP_URL);
  const location = await axios.get(
    `${API_LOCATION_BASE_URL}&q=${ip}&days=3&aqi=no&alerts=no`,
  );
  return location;
}

export async function getLocationViaCoords() {
  return getLocationPromisified()
    .then((location) => {
      return axios.get(
        `${API_LOCATION_BASE_URL}&q=${location.coords.latitude},${location.coords.longitude}&days=3&aqi=no&alerts=no`,
      );
    })
    .then((location) => {
      return location;
    });
}

function getLocationPromisified() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        resolve(location);
      },
      (err) => {
        reject(err);
      },
    );
  });
}
