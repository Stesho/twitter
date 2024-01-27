import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { ThemeProvider } from 'styled-components';

import { Layout } from '@/components/Layout/Layout';
import { Loader } from '@/components/ui/Loader/Loader';
import { auth } from '@/db/firesbase';
import { getUserById } from '@/services/user/getUserById';
import { themeSelector } from '@/store/selectors/selectors';
import { setUser } from '@/store/slices/userSlice';
import { darkTheme, lightTheme } from '@/styles/themes';
import { Theme } from '@/types/theme';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, async (userData) => {
      if (userData) {
        const existedUser = await getUserById(userData.uid);

        if (existedUser) {
          dispatch(setUser({ ...existedUser, id: userData.uid }));
        }
      } else {
        dispatch(setUser(null));
      }

      setIsLoading(false);
    });

    return unsubscribe;
  }, [dispatch]);

  if (isLoading) {
    return <Loader style={{ height: '100vh' }} />;
  }

  return (
    <ThemeProvider theme={theme === Theme.light ? lightTheme : darkTheme}>
      <Layout />
    </ThemeProvider>
  );
};
