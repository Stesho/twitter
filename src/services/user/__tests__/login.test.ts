import { signInWithEmailAndPassword } from 'firebase/auth';

import { login, LoginData } from '@/services/user/login';

const loginData: LoginData = {
  identifier: 'test@test.test',
  password: 'test',
};

jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(
    () =>
      new Promise((resolve) => {
        resolve({
          user: loginData,
        });
      }),
  ),
}));

jest.mock('@/db/firesbase', () => ({
  db: {},
}));

describe('log in', () => {
  it('should call firebase sign in method', async () => {
    const user = await login(loginData);

    expect(signInWithEmailAndPassword).toHaveBeenCalled();
    expect(user).toEqual(loginData);
  });

  it('should call firebase sign in method with correct params', async () => {
    await login(loginData);

    expect((signInWithEmailAndPassword as jest.Mock).mock.calls[0][1]).toBe(
      loginData.identifier,
    );
    expect((signInWithEmailAndPassword as jest.Mock).mock.calls[0][2]).toBe(
      loginData.password,
    );
  });

  it('should return null if error', async () => {
    let user;
    const credentialError = new Error('Invalid credential');

    try {
      (signInWithEmailAndPassword as jest.Mock).mockRejectedValue(
        credentialError,
      );
      user = await login(loginData);
    } catch (error) {
      expect(signInWithEmailAndPassword).toThrowError();
      expect((signInWithEmailAndPassword as jest.Mock).mock.results[0]).toBe(
        credentialError,
      );
      expect(user).toBeNull();
    }
  });
});
