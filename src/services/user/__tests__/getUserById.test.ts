import { getDoc } from 'firebase/firestore';

import { getUserById } from '@/services/user/getUserById';

const user = {
  id: 'id',
  avatar: 'url',
  name: 'name',
  email: 'email',
  phoneNumber: 'phone',
  birthday: '',
};

jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  getDoc: jest.fn(() => ({
    data: () => user,
    id: 'id',
  })),
}));

jest.mock('@/db/firesbase', () => ({
  db: {},
}));

describe('get user by id', () => {
  it('should return user data', async () => {
    const receivedUser = await getUserById('id');

    expect(receivedUser).toEqual(user);
  });

  it('should return null if error', async () => {
    let receivedUser;
    const getUserError = new Error('Error in receive user');

    try {
      (getDoc as jest.Mock).mockRejectedValue(getUserError);
      receivedUser = await getUserById('id');
    } catch (error) {
      expect(getDoc).toThrowError(getUserError);
      expect(receivedUser).toBeNull();
    }
  });
});
