import React from 'react';
import { useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { Layout } from '@/components/Layout/Layout';
import { themeSelector } from '@/store/selectors/selectors';
import { persistor } from '@/store/store';
import { darkTheme, lightTheme } from '@/styles/themes';
import { Theme } from '@/types/theme';

export const App = () => {
  const theme = useSelector(themeSelector);

  return (
    <ThemeProvider theme={theme === Theme.light ? lightTheme : darkTheme}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout />
      </PersistGate>
    </ThemeProvider>
  );
};
