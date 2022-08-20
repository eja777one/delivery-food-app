import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { configureStore } from './store';
import { Provider } from 'react-redux/es/exports';


const store = configureStore();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
