import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { User } from '@/types/user';

export const getAllUsers = async () => {
  try {
    const users = await getDocs(collection(db, Collections.Users));
    return users.docs.map(
      (userDoc) =>
        ({
          id: userDoc.id,
          ...userDoc.data(),
        }) as User,
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};
