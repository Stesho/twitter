import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/db/firesbase';
import { SignupUserData, User } from '@/types/user';
import { Collections } from '@/types/collections';

export const signup = (
  userData: SignupUserData,
  password: string,
): Promise<User | null> =>
  createUserWithEmailAndPassword(auth, userData.email, password)
    .then(async (userCredential) => {
      const { uid, displayName, email, phoneNumber } = userCredential.user;

      await setDoc(doc(db, Collections.Users, uid), userData);

      return {
        id: uid,
        avatar: '',
        name: displayName || '',
        email: email || '',
        phoneNumber: phoneNumber || '',
        birthday: '',
      };
    })
    .catch((error) => {
      console.error(error.code, error.message);

      return null;
    });
