import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

// Use HashRouter on GitHub Pages (github.io) and BrowserRouter elsewhere (e.g., Vercel)
const RouterComponent = window.location.hostname.includes('github.io') ? HashRouter : BrowserRouter;

root.render(
  <RouterComponent>
    <App />
  </RouterComponent>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

