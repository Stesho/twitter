import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from '@/store/store';
import { ResetStyles } from '@/styles/reset';

import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResetStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
