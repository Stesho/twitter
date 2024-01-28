import { signOut } from 'firebase/auth';

import { auth } from '@/db/firesbase';
import { setUser } from '@/store/slices/userSlice';
import { store } from '@/store/store';

export const logout = () =>
  signOut(auth)
    .then(() => {
      store.dispatch(setUser(null));
    })
    .catch((error) => {
      console.error(error);
    });
