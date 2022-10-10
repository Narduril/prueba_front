import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './application/store/middleware/sagaMiddleware';
import Application from './application/Application.component';
import '@fontsource/roboto';

const container = document.getElementById('root');

createRoot(container).render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>
);
