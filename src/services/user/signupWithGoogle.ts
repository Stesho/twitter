import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { auth, db, provider } from '@/db/firesbase';
import { getUserById } from '@/services/user/getUserById';
import { setUser } from '@/store/slices/userSlice';
import { store } from '@/store/store';
import { Collections } from '@/types/collections';
import { User } from '@/types/user';
import { getUsernameFromEmail } from '@/utils/getUsernameFromEmail';

export const signupWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then(async (userCredential) => {
      const { uid, photoURL, displayName, email, phoneNumber } =
        userCredential.user;

      const dbUserData = {
        avatar: photoURL || '',
        name: displayName || '',
        email: email || '',
        username: getUsernameFromEmail(email || ''),
        phoneNumber: phoneNumber || '',
        birthday: '',
      };
      const stateUserData: User = {
        id: uid,
        ...dbUserData,
      };

      const existedUser = await getUserById(uid);
      if (!existedUser) {
        await setDoc(doc(db, Collections.Users, uid), dbUserData);

        store.dispatch(setUser(stateUserData));
      }

      return stateUserData;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
