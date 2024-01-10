import { verifyBeforeUpdateEmail } from 'firebase/auth';
import { getDocs, updateDoc } from 'firebase/firestore';
import { User } from '@/types/user';
import { updateUser } from '@/services/user/updateUser';
import { Tweet } from '@/types/tweet';

jest.mock('firebase/auth', () => ({
  verifyBeforeUpdateEmail: jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  getDocs: jest.fn(),
  updateDoc: jest.fn(),
  collection: jest.fn(),
  where: jest.fn(),
  query: jest.fn(),
}));

jest.mock('@/db/firesbase', () => ({
  db: {},
  auth: {
    currentUser: {
      id: 'id',
      avatar: 'url',
      name: 'name',
      email: 'email',
      phoneNumber: 'phone',
      birthday: '',
    },
  },
}));

describe('sign up with google account', () => {
  let user: User;
  let tweets: Tweet[];

  beforeEach(() => {
    user = {
      id: 'id',
      avatar: 'url',
      name: 'name',
      email: 'email',
      phoneNumber: 'phone',
      birthday: '',
    };
    tweets = [
      {
        id: 'id',
        text: 'text',
        author: user,
        date: '',
        likes: [],
      },
    ];
  });

  it('should send an email if the user updates the mail', async () => {
    user.email = 'newEmail';
    await updateUser(user);

    expect(verifyBeforeUpdateEmail).toHaveBeenCalled();
  });

  it('should update tweet docs and user doc', async () => {
    (getDocs as jest.Mock).mockReturnValue(tweets);

    await updateUser(user);

    expect(updateDoc).toHaveBeenCalledTimes(2);
  });

  it('should return user data', async () => {
    const userData = await updateUser(user);

    expect(userData).toEqual(user);
  });

  it('should return null if error', async () => {
    let userData;
    const updatingError = new Error('Error in email updating');

    try {
      (verifyBeforeUpdateEmail as jest.Mock).mockRejectedValue(updatingError);
      user.email = 'newEmail';
      userData = await updateUser(user);
    } catch (error) {
      expect(verifyBeforeUpdateEmail).toThrowError();
      expect((verifyBeforeUpdateEmail as jest.Mock).mock.results[0]).toBe(
        updatingError,
      );
      expect(userData).toBeNull();
    }
  });
});
