import { getDoc, doc } from 'firebase/firestore';
import { User } from '@/types/user';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';

export const getUserById = async (userId: string) => {
  try {
    const userRef = doc(db, Collections.Users, userId);

    const userDoc = await getDoc(userRef);
    const userData = userDoc.data() as User;

    return {
      ...userData,
      id: userDoc.id,
    } as User;
  } catch (error) {
    console.error(error);
    return null;
  }
};
