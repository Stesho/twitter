import {
  collection,
  getDocs,
  query,
  QuerySnapshot,
  where,
} from 'firebase/firestore';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { isEmail } from '@/utils/isEmail';
import { isPhoneNumber } from '@/utils/isPhoneNumber';
import { User } from '@/types/user';

interface LoginData {
  identifier: string;
  password: string;
}

export const login = async (loginData: LoginData): Promise<User | null> => {
  try {
    let field = '';

    if (isEmail(loginData.identifier)) {
      field = 'user.email';
    }
    if (isPhoneNumber(loginData.identifier)) {
      field = 'user.phoneNumber';
    }

    const existedUser = query(
      collection(db, Collections.Users),
      where(field, '==', loginData.identifier),
    );

    const querySnapshot: QuerySnapshot = await getDocs(existedUser);

    if (querySnapshot.empty) {
      return null;
    }

    if (querySnapshot.docs[0].data().password !== loginData.password) {
      return null;
    }

    return {
      id: querySnapshot.docs[0].id,
      ...querySnapshot.docs[0].data().user,
    };
  } catch (error) {
    console.error('Error adding document: ', error);
    return null;
  }
};
