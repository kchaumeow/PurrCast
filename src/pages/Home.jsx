import ForecastStack from '../components/ForecastStack';
import Layout from '../components/Layout';
import {useSelector} from 'react-redux/es/hooks/useSelector';

export default function Home() {
  const forecastArray = useSelector((state) => state.forecastSlice.forecast.forecastday);
  return (
    <Layout>
      <ForecastStack forecastArray={forecastArray} />
    </Layout>
  );
}
