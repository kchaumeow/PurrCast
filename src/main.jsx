import React, {useMemo, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router-dom';
import {router} from './router';
import ReduxProvider from './provider';
import {ThemeProvider, createTheme} from '@mui/material';
import {ColorModeContext} from './context';
export default function App() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          if (newMode === 'dark') {
            document.body.style.background =
              'linear-gradient(15deg, rgba(134,194,219,1) 3%, rgba(140,140,140,1) 56%)';
          } else {
            document.body.style.background =
              'linear-gradient(123deg, rgba(123, 52, 239, 0.85) 16.23%, #228AEA 82.96%)';
          }
          return newMode;
        });
      },
    }),
    [],
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ReduxProvider>
          <RouterProvider router={router} />
        </ReduxProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
