import {Button} from '@mui/material';
import {setCityToLocalStorage} from '../localStore';
export default function SetCityButton({city}) {
  return (
    <Button
      size="small"
      variant="contained"
      onClick={() => setCityToLocalStorage(city)}
    >
      Set this city as default
    </Button>
  );
}
