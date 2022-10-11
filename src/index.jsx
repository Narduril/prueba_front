import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';
import store from './application/store/middleware/sagaMiddleware';
import Application from './application/Application.component';
import '@fontsource/roboto';

/** Persistir el state */
const persistor = persistStore(store);

const container = document.getElementById('root');

createRoot(container).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Application />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
