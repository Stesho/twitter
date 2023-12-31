import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/db/firesbase';

export const signupWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
