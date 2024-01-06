import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/db/firesbase';
import { SignupUserData, User } from '@/types/user';
import { Collections } from '@/types/collections';

export const signup = (userData: SignupUserData, password: string) =>
  createUserWithEmailAndPassword(auth, userData.email, password)
    .then(async (userCredential) => {
      const { uid, photoURL } = userCredential.user;

      const user = {
        avatar: photoURL || '',
        ...userData,
      } as User;

      await setDoc(doc(db, Collections.Users, uid), user);

      return {
        ...user,
        id: uid,
      } as User;
    })
    .catch((error) => {
      console.error(error.code, error.message);

      return null;
    });
