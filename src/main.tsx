import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { ResetStyles } from '@/styles/reset';
import { store } from '@/store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResetStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
