import React from 'react';
import { createRoot } from 'react-dom/client';
// global.css va primero: define la base y las utilidades (.script, .btn, ...)
// para que el CSS de cada componente pueda ajustarlas despues.
import './styles/global.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
