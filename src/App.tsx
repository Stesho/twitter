import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { Layout } from '@/components/Layout/Layout';
import { auth } from '@/db/firesbase';
import { setUser } from '@/store/slices/userSlice';
import { getUserById } from '@/services/user/getUserById';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (userData) => {
      if (userData) {
        const existedUser = await getUserById(userData.uid);

        if (existedUser) {
          dispatch(setUser({ ...existedUser, id: userData.uid }));
        }
      } else {
        dispatch(setUser(null));
      }
    });
  });

  return <Layout />;
};
