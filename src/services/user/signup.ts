import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { auth, db } from '@/db/firesbase';
import { setUser } from '@/store/slices/userSlice';
import { store } from '@/store/store';
import { Collections } from '@/types/collections';
import { SignupUserData, User } from '@/types/user';
import { getUsernameFromEmail } from '@/utils/getUsernameFromEmail';

export const signup = (userData: SignupUserData, password: string) =>
  createUserWithEmailAndPassword(auth, userData.email, password)
    .then(async (userCredential) => {
      const { uid, photoURL } = userCredential.user;

      const user = {
        avatar: photoURL || '',
        username: getUsernameFromEmail(userData.email),
        ...userData,
      };

      await setDoc(doc(db, Collections.Users, uid), user);

      const newUser: User = {
        id: uid,
        ...user,
      };

      store.dispatch(setUser(newUser));

      return newUser;
    })
    .catch((error) => {
      console.error(error.code, error.message);

      return null;
    });
