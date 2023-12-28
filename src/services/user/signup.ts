import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { SignupUserData, User } from '@/types/user';
import { isUserExist } from '@/services/user/isUserExist';

export const signup = async (
  user: SignupUserData,
  password: string,
): Promise<User | null> => {
  try {
    const isUser = await isUserExist(user);

    if (isUser) {
      return null;
    }

    const newUser = await addDoc(collection(db, Collections.Users), {
      user,
      password,
    });

    return {
      ...user,
      id: newUser.id,
    };
  } catch (error) {
    console.error('Error adding document: ', error);
    return null;
  }
};
