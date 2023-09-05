import {Card, Stack} from '@mui/material';
import CityInput from './CityInput';

export default function Layout({children}) {
  return (
    <Stack spacing={10} alignItems="center" sx={{width: '100%'}}>
      <h2>Everyday PurrCast</h2>
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{width: {xs: 'calc(100% - 16px)', md: '90%', lg: '60%'}}}
      >
        <Card sx={{p: 3, width: '100%', overflow: 'visible'}}>
          <CityInput />
        </Card>
        <Card sx={{p: 3, width: '100%'}} variant="outlined">
          {children}
        </Card>
      </Stack>
    </Stack>
  );
}
