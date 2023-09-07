import {Alert, Button, Snackbar} from '@mui/material';
import {setCityToLocalStorage} from '../localStore';
import {useState} from 'react';
export default function SetCityButton({city}) {
  const [open, setOpen] = useState(false);
  function onClickSetDefaultCity() {
    setCityToLocalStorage(city);
    setOpen(true);
  }
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        sx={{width: {xs: '90%', md: '30%'}}}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          color="info"
          sx={{width: '100%'}}
        >
          {`City ${city} was set as default`}
        </Alert>
      </Snackbar>
      <Button size="small" variant="contained" onClick={onClickSetDefaultCity}>
        Set as default
      </Button>
    </>
  );
}
