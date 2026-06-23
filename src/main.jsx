import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AudioProvider } from './context/AudioContext';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <AudioProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AudioProvider>
);
