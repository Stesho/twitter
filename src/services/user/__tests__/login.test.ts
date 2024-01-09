// import {signInWithEmailAndPassword} from "firebase/auth";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { login, LoginData } from '@/services/user/login';

jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(
    () =>
      new Promise((resolve) => {
        resolve({
          user: {
            displayName: 'Ivan',
          },
        });
      }),
  ),
}));

jest.mock('@/db/firesbase', () => ({
  database: {},
}));

const loginData: LoginData = {
  identifier: 'test@test.test',
  password: 'test',
};

describe('login', () => {
  it('should call firebase sign in method', async () => {
    const user = await login(loginData);

    expect(signInWithEmailAndPassword).toHaveBeenCalled();
    expect(user).toEqual({
      displayName: 'Ivan',
    });
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
        error,
      );
      expect(user).toBeNull();
    }
  });
});
