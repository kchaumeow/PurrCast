import {Stack} from '@mui/material';
import DayForecast from './DayForecast';

export default function ForecastStack({forecastArray}) {
  return (
    <Stack spacing={5}>
      {forecastArray.map((forecast) => {
        return <DayForecast dayForecast={forecast} key={forecast.date_epoch} />;
      })}
    </Stack>
  );
}
