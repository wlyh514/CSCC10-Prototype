import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NavigatorProvider } from './contexts/Navigator';
import { AppConfigProvider } from './contexts/AppConfig';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavigatorProvider>
    <AppConfigProvider>
      <App />
    </AppConfigProvider>
    </NavigatorProvider>
  </React.StrictMode>
);
