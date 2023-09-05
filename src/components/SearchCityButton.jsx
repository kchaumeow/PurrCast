import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
export default function SearchCityButton({city}) {
  const navigate = useNavigate();
  function onClickSearchCity(city) {
    navigate(`/` + city);
  }
  return (
    <Button variant="contained" onClick={() => onClickSearchCity(city)}>
      Search
    </Button>
  );
}
