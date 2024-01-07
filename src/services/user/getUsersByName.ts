import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { User } from '@/types/user';

export const getUsersByName = async (name: string) => {
  try {
    const usersQuery = query(
      collection(db, Collections.Users),
      where('name', '>=', name),
      where('name', '<=', `${name}~`),
    );

    const usersDocs = await getDocs(usersQuery);

    return usersDocs.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as User[];
  } catch (error) {
    console.error(error);
    return null;
  }
};
