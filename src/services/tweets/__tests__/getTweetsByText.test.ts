import { getDocs } from 'firebase/firestore';

import { getTweetsByText } from '@/services/tweets/getTweetsByText';
import { Tweet } from '@/types/tweet';

const tweet: Tweet = {
  id: 'id',
  text: 'text',
  author: {
    id: 'userId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phone',
    avatar: 'avatar',
    birthday: 'birthday',
  },
  image: 'image',
  date: 'date',
  likes: [],
};

jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  query: jest.fn(),
  where: jest.fn(),
  getDocs: jest.fn(() => ({
    docs: [
      {
        id: 'id',
        data: () => ({
          ...tweet,
        }),
      },
    ],
  })),
}));

jest.mock('@/db/firesbase', () => ({
  db: {},
}));

describe('get tweet by text', () => {
  it('should receive tweets started with passed text', async () => {
    const text = 'text';
    const tweetData = await getTweetsByText(text);

    expect(getDocs).toHaveBeenCalled();
    expect(tweetData).toEqual([tweet]);
  });

  it('should return null if error', async () => {
    const getTweetsError = new Error('Error in fetching tweet');
    const text = 'text';
    let tweetData;

    try {
      (getDocs as jest.Mock).mockRejectedValue(getTweetsError);
      tweetData = await getTweetsByText(text);
    } catch (error) {
      expect(getDocs).toThrowError(getTweetsError);
      expect(tweetData).toBeNull();
    }
  });
});
