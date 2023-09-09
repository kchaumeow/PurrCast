import {ReactSearchAutocomplete} from 'react-search-autocomplete';
import {useEffect, useState} from 'react';
import {getAllCities} from '../api/api';
import {Stack, Box, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

export default function CityInput() {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();
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
    <Stack direction="row" gap={2} sx={{flexWrap: {xs: 'wrap', md: 'nowrap'}}}>
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
          onSearch={(newValue, result) => setCity(newValue)}
          items={cities}
          inputDebounce={0}
          autoFocus
          showNoResultsText
        />
      </Box>
      <Button variant="contained" onClick={() => navigate(`/` + city)}>
        Search
      </Button>
    </Stack>
  );
}
