import {ReactSearchAutocomplete} from 'react-search-autocomplete';
import {useEffect, useState} from 'react';
import {getAllCities} from '../api/api';
import SearchCityButton from './SearchCityButton';
import {Stack, Box} from '@mui/material';

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
    <Stack direction="row" gap={2}>
      <Box sx={{width: '100%'}}>
        <ReactSearchAutocomplete
          placeholder="Type your city here..."
          styling={{
            height: '34px',
            borderRadius: '4px',
            backgroundColor: '#F1F1F1',
            boxShadow: 'none',
            lineColor: 'gray',
            clearIconMargin: '3px 8px 0 0',
            zIndex: 10,
          }}
          onSelect={(newValue) => setCity(newValue.name)}
          onSearch={(newValue,result) => console.log(newValue)}
          items={cities}
          autoFocus
          showNoResultsText
        />
      </Box>
      <SearchCityButton city={city} />
    </Stack>
  );
}
