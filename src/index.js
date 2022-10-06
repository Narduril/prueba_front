import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './application/Application.component';

const container = document.getElementById('root');

createRoot(container).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
