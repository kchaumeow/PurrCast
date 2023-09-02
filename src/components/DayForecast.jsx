import {Box, Stack, Tooltip, Card} from '@mui/material';

export default function DayForecast({dayForecast}) {
  return (
    <Box
      key={dayForecast.date}
      sx={{
        display: 'flex',
        flexGrow: 1,
        flexBasis: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Stack alignItems="center" sx={{height: '100%'}} justifyContent="center" spacing={1}>
        <div className='bold'>{new Date(dayForecast.date).toLocaleDateString()}</div>
        <Stack
          alignItems="center"
          sx={{height: '100%'}}
          justifyContent="center"
          spacing={3}
          direction="row"
        >
          {dayForecast.hour.map((hour, index) => {
            return (
              index % 4 === 0 && (
                <Tooltip arrow title={hour.condition.text} placement="top">
                  <Card
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      padding: '0.4rem',
                      width: '8rem',
                      height: '6rem',
                    }}
                  >
                    <Stack direction="row" alignItems="center">
                      <img
                        src={`https:${hour.condition.icon}`}
                        alt={hour.condition.text}
                        width={60}
                        height={60}
                      />
                      <div className="bold">{hour.temp_c}</div>
                    </Stack>
                    <div>{hour.time.split(' ')[1]}</div>
                  </Card>
                </Tooltip>
              )
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
}
