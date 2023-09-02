import {Autocomplete, Stack, TextField} from '@mui/material';
import {useEffect, useState} from 'react';
import {getAllCities} from '../api/api';
import SearchCityButton from './SearchCityButton';

export default function CityInput() {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const getCities = async () => {
      if (process.env.NODE_ENV === 'production')
        setCities((await getAllCities()).data.response);
      else {
        const citiesArray = await import('../api/cities.json');
        setCities(citiesArray.default);
      }
    };
    getCities();
  }, []);

  return (
    <Stack direction="row" spacing={2}>
      <Autocomplete
        fullWidth
        freeSolo
        options={cities.map((city) => city.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="City"
            value={city}
            onChange={setCity(event.target.value)}
          />
        )}
      />
      <SearchCityButton city={city} />
    </Stack>
  );
}
