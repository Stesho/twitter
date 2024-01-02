import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/db/firesbase';

interface LoginData {
  identifier: string;
  password: string;
}

export const login = ({ identifier, password }: LoginData) =>
  signInWithEmailAndPassword(auth, identifier, password)
    .then((userCredential) => userCredential.user)
    .catch((error) => {
      console.error(error.code, error.message);
      return null;
    });
