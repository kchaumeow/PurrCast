import ForecastStack from '../components/ForecastStack';
import Layout from '../components/Layout';
import {useSelector} from 'react-redux/es/hooks/useSelector';
import {getCityFromLocalStorage} from '../localStore';

export default function Home() {
  const forecastArray = useSelector(
    (state) => state.forecastSlice.forecast.forecastday,
  );
  const cityName = getCityFromLocalStorage();
  return (
    <Layout>
      {cityName && (
        <div className="bold">{`Your current city: ` + cityName}</div>
      )}
      <ForecastStack forecastArray={forecastArray} />
    </Layout>
  );
}
