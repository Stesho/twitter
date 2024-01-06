import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db, provider } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { User } from '@/types/user';
import { getUserById } from '@/services/user/getUserById';

export const signupWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then(async (userCredential) => {
      const { uid, photoURL, displayName, email, phoneNumber } =
        userCredential.user;

      const user = {
        avatar: photoURL || '',
        name: displayName || '',
        email: email || '',
        phoneNumber: phoneNumber || '',
        birthday: '',
      };

      const existedUser = await getUserById(uid);
      if (!existedUser) {
        await setDoc(doc(db, Collections.Users, uid), user);
      }

      return {
        ...user,
        id: uid,
      } as User;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
