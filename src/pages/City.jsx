import Layout from '../components/Layout';
import {useParams} from 'react-router-dom';
import {getForecastInCity} from '../api/api';
import {useEffect, useState} from 'react';
import ForecastStack from '../components/ForecastStack';
import SetCityButton from '../components/SetCityButton';
import {Stack} from '@mui/material';
export default function City() {
  const [forecast, setForecast] = useState([]);
  const {cityName} = useParams();
  useEffect(() => {
    const getForecast = async () => {
      const forecastInfo = (await getForecastInCity(cityName)).data;
      setForecast(forecastInfo.forecast.forecastday);
    };
    getForecast();
  }, [cityName]);
  return (
    <Layout>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <div>{cityName}</div>
        <SetCityButton city={cityName} />
      </Stack>
      <ForecastStack forecastArray={forecast} />
    </Layout>
  );
}
