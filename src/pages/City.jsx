import Layout from '../components/Layout';
import {useNavigate, useParams} from 'react-router-dom';
import {getForecastInCity} from '../api/api';
import {useEffect, useState} from 'react';
import ForecastStack from '../components/ForecastStack';
import SetCityButton from '../components/SetCityButton';
import {Box, Button, Stack} from '@mui/material';
export default function City() {
  const navigate = useNavigate();
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const {cityName} = useParams();

  useEffect(() => {
    const getForecast = async () => {
      setError(null);
      try {
        const forecastInfo = (await getForecastInCity(cityName)).data;
        setForecast(forecastInfo.forecast.forecastday);
        setError(null);
      } catch (e) {
        setError(e);
        console.error('City::useEffect::getForecast', e);
      }
    };

    getForecast();
  }, [cityName]);

  return (
    <Layout>
      {error ? (
        <Stack alignItems="center" spacing={4}>
          <div className="bold">Something went wrong</div>
          {error.message && <Box px={1}>{error.message}</Box>}
          <Button variant="primary" onClick={() => navigate('/')}>
            <img src="/home.svg" alt="Home" width={200} height={200} />
          </Button>
        </Stack>
      ) : (
        <>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <div className="bold">{cityName}</div>
            <SetCityButton city={cityName} />
          </Stack>
          <ForecastStack forecastArray={forecast} />
        </>
      )}
    </Layout>
  );
}
