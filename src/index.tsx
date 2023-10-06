import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppApollo from './AppApollo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    React Query Implementation:
    <App />
    <hr></hr>
    Apollo GraphQL Implementation:
    <AppApollo />
  </React.StrictMode>
);
