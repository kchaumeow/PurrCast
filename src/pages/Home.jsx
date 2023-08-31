import {Box, Grid, Stack, TableRow} from '@mui/material';
import Layout from '../components/Layout';
import {useSelector} from 'react-redux/es/hooks/useSelector';
export default function Home() {
  const forecastArray = useSelector((state) => state.forecastSlice.forecast);
  console.log(forecastArray.forecastday);
  return (
    <Layout>
      <Stack spacing={2} direction="row">
        {forecastArray.forecastday.map((forecast) => {
          return (
            <Box
              sx={{
                display: 'flex',
                flexGrow: 1,
                flexBasis: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <Stack alignItems="center" sx={{height: '100%'}}>
                <div>{forecast.day.condition.text}</div>
                <img
                  src={`https:${forecast.day.condition.icon}`}
                  alt={forecast.day.condition.text}
                  width={100}
                  height={100}
                />
                <div>{forecast.day.avgtemp_c}</div>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Layout>
  );
}
