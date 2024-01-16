import { collection, getDocs, or, query, where } from 'firebase/firestore';

import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { User } from '@/types/user';

export const getUserByEmailOrPhone = async (email = '', phoneNumber = '') => {
  try {
    const userQuery = query(
      collection(db, Collections.Users),
      or(where('email', '==', email), where('phoneNumber', '==', phoneNumber)),
    );

    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.empty) {
      return null;
    }

    return querySnapshot.docs[0].data() as User;
  } catch (error) {
    console.error(error);
    return null;
  }
};
