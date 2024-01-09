import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { onAuthStateChanged } from 'firebase/auth';
import { Layout } from '@/components/Layout/Layout';
import { auth } from '@/db/firesbase';
import { setUser } from '@/store/slices/userSlice';
import { getUserById } from '@/services/user/getUserById';
import { themeSelector } from '@/store/selectors/selectors';
import { Theme } from '@/types/theme';
import { darkTheme, lightTheme } from '@/styles/themes';

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
