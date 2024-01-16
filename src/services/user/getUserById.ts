import { doc, getDoc } from 'firebase/firestore';

import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { User } from '@/types/user';

export const getUserById = async (userId: string) => {
  try {
    const userRef = doc(db, Collections.Users, userId);

    const userDoc = await getDoc(userRef);
    const userData = userDoc.data() as User;

    if (!userData) {
      return null;
    }

    return {
      ...userData,
      id: userDoc.id,
    } as User;
  } catch (error) {
    console.error(error);
    return null;
  }
};
