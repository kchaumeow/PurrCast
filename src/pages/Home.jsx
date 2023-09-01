import {Stack} from '@mui/material';
import Layout from '../components/Layout';
import {useSelector} from 'react-redux/es/hooks/useSelector';
import DayForecast from '../components/DayForecast';
export default function Home() {
  const forecastArray = useSelector((state) => state.forecastSlice.forecast);
  return (
    <Layout>
      <Stack spacing={5}>
        {forecastArray.forecastday.map((forecast) => {
          return <DayForecast dayForecast={forecast} />;
        })}
      </Stack>
    </Layout>
  );
}
