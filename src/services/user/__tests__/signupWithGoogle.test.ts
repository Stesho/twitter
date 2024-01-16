import { signInWithPopup } from 'firebase/auth';
import { setDoc } from 'firebase/firestore';

import { getUserById } from '@/services/user/getUserById';
import { signupWithGoogle } from '@/services/user/signupWithGoogle';
import { User } from '@/types/user';

const userCredential = {
  uid: 'id',
  photoURL: 'url',
  displayName: 'name',
  email: 'email',
  phoneNumber: 'phone',
};

const user: User = {
  id: 'id',
  avatar: 'url',
  name: 'name',
  email: 'email',
  phoneNumber: 'phone',
  birthday: '',
  username: 'email',
};

jest.mock('firebase/auth', () => ({
  signInWithPopup: jest.fn(
    () =>
      new Promise((resolve) => {
        resolve({
          user: userCredential,
        });
      }),
  ),
}));

jest.mock('@/services/user/getUserById', () => ({
  getUserById: jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  setDoc: jest.fn(),
}));

jest.mock('@/db/firesbase', () => ({
  db: {},
}));

describe('sign up with google account', () => {
  it('should call firebase sign in with google method', async () => {
    await signupWithGoogle();

    expect(signInWithPopup).toHaveBeenCalled();
    expect(getUserById).toHaveBeenCalled();
    expect(setDoc).toHaveBeenCalled();
  });

  it('should not to create new user if user with passed email already exists', async () => {
    (setDoc as jest.Mock).mockReset();
    (getUserById as jest.Mock).mockReturnValue(user);

    await signupWithGoogle();

    expect(signInWithPopup).toHaveBeenCalled();
    expect(getUserById).toHaveBeenCalled();
    expect(setDoc).not.toHaveBeenCalled();
  });

  it('should return user data', async () => {
    const userData = await signupWithGoogle();

    expect(userData).toEqual(user);
  });

  it('should return null if error', async () => {
    let userData;
    const credentialError = new Error('Error');

    try {
      (signInWithPopup as jest.Mock).mockRejectedValue(credentialError);
      userData = await signupWithGoogle();
    } catch (error) {
      expect(signInWithPopup).toThrowError();
      expect((signInWithPopup as jest.Mock).mock.results[0]).toBe(
        credentialError,
      );
      expect(userData).toBeNull();
    }
  });
});
