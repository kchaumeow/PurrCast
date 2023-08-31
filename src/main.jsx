import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router-dom';
import {router} from './router';
import ReduxProvider from './provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>,
);
