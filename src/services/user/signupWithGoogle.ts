import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db, provider } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { SignupUserData } from '@/types/user';

export const signupWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(async (userCredential) => {
      const { uid, displayName, email, phoneNumber } = userCredential.user;

      const user: SignupUserData = {
        avatar: '',
        name: displayName || '',
        email: email || '',
        phoneNumber: phoneNumber || '',
        birthday: '',
      };

      await setDoc(doc(db, Collections.Users, uid), user);

      return user;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};
