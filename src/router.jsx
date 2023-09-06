import Home from './pages/Home.jsx';
import City from './pages/City.jsx';
import {getCityFromLocalStorage} from './localStore.js';
import {
  getLocationViaIP,
  getLocationViaCoords,
  setForecastInfoToStore,
  getForecastInCity,
} from './api/api.js';
import {createBrowserRouter} from 'react-router-dom';
export const router = createBrowserRouter([
  {
    element: <Home />,
    index: true,
    loader: async () => {
      if (getCityFromLocalStorage() === undefined) {
        if (navigator.geolocation) {
          setForecastInfoToStore((await getLocationViaCoords()).data);
        } else {
          setForecastInfoToStore((await getLocationViaIP()).data);
        }
      } else {
        setForecastInfoToStore(
          (await getForecastInCity(getCityFromLocalStorage())).data,
        );
      }
      return null;
    },
  },
  {
    element: <City />,
    path: '/:cityName',
  },
]);
