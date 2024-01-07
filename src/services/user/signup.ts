import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/db/firesbase';
import { SignupUserData, User } from '@/types/user';
import { Collections } from '@/types/collections';
import { store } from '@/store/store';
import { setUser } from '@/store/slices/userSlice';

export const signup = (userData: SignupUserData, password: string) =>
  createUserWithEmailAndPassword(auth, userData.email, password)
    .then(async (userCredential) => {
      const { uid, photoURL } = userCredential.user;

      const user = {
        avatar: photoURL || '',
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
