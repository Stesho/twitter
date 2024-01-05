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
import { SignupUserData, User } from '@/types/user';
import { Collections } from '@/types/collections';

export const updateUser = async (userData: User) => {
  if (userData.email !== auth.currentUser?.email) {
    const emailRes = await verifyBeforeUpdateEmail(
      auth.currentUser!,
      userData.email,
    ).catch((error) => {
      console.error(error);
      return null;
    });

    if (emailRes === null) {
      return null;
    }
  }

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

  const updatedUser: SignupUserData = {
    avatar: userData.avatar,
    name: userData.name,
    email: userData.email,
    phoneNumber: userData.phoneNumber,
    birthday: userData.birthday,
  };

  await updateDoc(doc(db, Collections.Users, userData.id), updatedUser);

  return userData;
};
