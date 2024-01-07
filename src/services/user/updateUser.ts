import { verifyBeforeUpdateEmail } from 'firebase/auth';
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { auth, db } from '@/db/firesbase';
import { User } from '@/types/user';
import { Collections } from '@/types/collections';

export const updateUser = async (userData: User) => {
  try {
    await verifyBeforeUpdateEmail(auth.currentUser!, userData.email);

    const tweetsQuery = query(
      collection(db, Collections.Tweets),
      where('author.id', '==', userData.id),
    );

    const tweetsData = await getDocs(tweetsQuery);

    tweetsData.forEach((tweetDoc) => {
      updateDoc(tweetDoc.ref, {
        author: userData,
      });
    });

    const updatedUser = {
      avatar: userData.avatar,
      name: userData.name,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
      birthday: userData.birthday,
    };

    await updateDoc(doc(db, Collections.Users, userData.id), updatedUser);

    return userData;
  } catch (error) {
    console.error(error);
    return null;
  }
};
