import { signOut } from 'firebase/auth';

import { auth } from '@/db/firesbase';

export const logout = () =>
  signOut(auth).catch((error) => {
    console.error(error);
  });
