import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/db/firesbase';
import { getUserById } from '@/services/user/getUserById';
import { setUser } from '@/store/slices/userSlice';
import { store } from '@/store/store';

export interface LoginData {
  identifier: string;
  password: string;
}

export const login = ({ identifier, password }: LoginData) =>
  signInWithEmailAndPassword(auth, identifier, password)
    .then(async (userCredential) => {
      const { uid } = userCredential.user;
      const existedUser = await getUserById(uid);

      if (existedUser) {
        store.dispatch(setUser({ ...existedUser, id: uid }));
      }

      return existedUser;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
