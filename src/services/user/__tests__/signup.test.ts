import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc } from 'firebase/firestore';

import { signup } from '@/services/user/signup';
import { SignupUserData } from '@/types/user';

const testPassword = '123456';
const signupData: SignupUserData = {
  name: 'user',
  email: 'test@test.test',
  phoneNumber: '+12345678',
  birthday: '',
};

jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn(
    () =>
      new Promise((resolve) => {
        resolve({
          user: {
            uid: 'id',
            photoURL: 'url',
          },
        });
      }),
  ),
}));

jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  setDoc: jest.fn(),
}));

jest.mock('@/db/firesbase', () => ({
  db: {},
}));

describe('sign up', () => {
  it('should call firebase create user method', async () => {
    await signup(signupData, testPassword);

    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
    expect(setDoc).toHaveBeenCalled();
  });

  it('should return user data', async () => {
    const user = await signup(signupData, testPassword);

    expect(user).toEqual({
      id: 'id',
      avatar: 'url',
      name: 'user',
      email: 'test@test.test',
      phoneNumber: '+12345678',
      birthday: '',
      username: 'test',
    });
  });

  it('should return null if error', async () => {
    let user;
    const credentialError = new Error('Invalid credential');

    try {
      (createUserWithEmailAndPassword as jest.Mock).mockRejectedValue(
        credentialError,
      );
      user = await signup(signupData, testPassword);
    } catch (error) {
      expect(createUserWithEmailAndPassword).toThrowError();
      expect(
        (createUserWithEmailAndPassword as jest.Mock).mock.results[0],
      ).toBe(credentialError);
      expect(user).toBeNull();
    }
  });
});
