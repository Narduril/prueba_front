import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Application from './application/Application.component';

const container = document.getElementById('root');

createRoot(container).render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>
);
