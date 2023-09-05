import Layout from '../components/Layout';
import {useParams} from 'react-router-dom';
import {getForecastInCity} from '../api/api';
import {useEffect, useState} from 'react';
import ForecastStack from '../components/ForecastStack';
export default function City() {
  const [forecast, setForecast] = useState([]);
  const {cityName} = useParams();
  useEffect(() => {
    const getForecast = async () => {
      const forecastInfo = (await getForecastInCity(cityName)).data;
      console.log(forecastInfo);
      setForecast(forecastInfo.forecast.forecastday);
    };
    getForecast();
  }, [cityName]);
  return (
    <Layout>
      <div>{cityName}</div>
      <ForecastStack forecastArray={forecast} />
    </Layout>
  );
}
