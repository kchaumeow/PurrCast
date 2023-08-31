import Home from './pages/Home.jsx';
import {
  getLocationViaIP,
  getLocationViaCoords,
  setForecastInfoToStore,
} from './api.js';
import {createBrowserRouter} from 'react-router-dom';
export const router = createBrowserRouter([
  {
    element: <Home />,
    index: true,
    loader: async () => {
      if (navigator.geolocation) {
        setForecastInfoToStore((await getLocationViaCoords()).data);
      } else {
        setForecastInfoToStore((await getLocationViaIP()).data);
      }
      return null;
    },
  },
]);
