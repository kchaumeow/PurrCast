import {Button} from '@mui/material';
import {getForecastInCity} from '../api/api';

export default function SearchCityButton({city}) {
  async function onClickSearchCity(city) {
    console.log(await getForecastInCity(city));
  }
  return (
    <Button variant="contained" onClick={() => onClickSearchCity(city)}>
      Search
    </Button>
  );
}
