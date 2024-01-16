import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { ThemeProvider } from 'styled-components';

import { Layout } from '@/components/Layout/Layout';
import { auth } from '@/db/firesbase';
import { getUserById } from '@/services/user/getUserById';
import { themeSelector } from '@/store/selectors/selectors';
import { setUser } from '@/store/slices/userSlice';
import { darkTheme, lightTheme } from '@/styles/themes';
import { Theme } from '@/types/theme';

export const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userData) => {
      if (userData) {
        const existedUser = await getUserById(userData.uid);

        if (existedUser) {
          dispatch(setUser({ ...existedUser, id: userData.uid }));
        }
      } else {
        dispatch(setUser(null));
      }
    });

    return unsubscribe;
  });

  return (
    <ThemeProvider theme={theme === Theme.light ? lightTheme : darkTheme}>
      <Layout />
    </ThemeProvider>
  );
};
