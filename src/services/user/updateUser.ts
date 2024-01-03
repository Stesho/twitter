import { updateProfile, verifyBeforeUpdateEmail } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '@/db/firesbase';
import { SignupUserData, User } from '@/types/user';
import { Collections } from '@/types/collections';

export const updateUser = async (userData: User) => {
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

  const profileRes = await updateProfile(auth.currentUser!, {
    displayName: userData.name,
  }).catch((error) => {
    console.error(error);
    return null;
  });

  if (profileRes === null) {
    return null;
  }

  const updatedUser: SignupUserData = {
    name: userData.name,
    email: userData.email,
    phoneNumber: userData.phoneNumber,
    birthday: userData.birthday,
  };

  await updateDoc(doc(db, Collections.Users, userData.id), updatedUser);

  return userData;
};
