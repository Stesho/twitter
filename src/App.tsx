import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { Layout } from '@/components/Layout/Layout';
import { auth, db } from '@/db/firesbase';
import { setUser } from '@/store/slices/userSlice';
import { Collections } from '@/types/collections';
import { User } from '@/types/user';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (userData) => {
      if (userData) {
        const user = await getDoc(doc(db, Collections.Users, userData.uid));
        dispatch(setUser(user.data() as User));
      } else {
        dispatch(setUser(null));
      }
    });
  });

  return <Layout />;
};
