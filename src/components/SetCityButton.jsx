import {Alert, Button, Snackbar, Stack} from '@mui/material';
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
      <Stack direction="row" alignItems="center">
        <Button size="small" variant='primary' onClick={onClickSetDefaultCity}>
          <div>Set as default</div>
          <img
            src="/location.svg"
            alt="Location"
            width={50}
            height={50}
          />
        </Button>
      </Stack>
    </>
  );
}
