import { addDoc } from 'firebase/firestore';

import { sendTweet } from '@/services/tweets/sendTweet';
import { Tweet } from '@/types/tweet';

jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  addDoc: jest.fn(() => ({
    id: 'id',
  })),
}));

jest.mock('@/db/firesbase', () => ({
  db: {},
}));

describe('send tweet', () => {
  let tweet: Tweet;

  beforeEach(() => {
    tweet = {
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
  });

  it('should add tweet document to tweets collection', async () => {
    const tweetData = await sendTweet(tweet);

    expect(addDoc).toHaveBeenCalled();
    expect(tweetData).toEqual(tweet);
  });

  it('should return null if error', async () => {
    let tweetData;
    const sendTweetError = new Error('Error in sending tweet');

    try {
      (addDoc as jest.Mock).mockRejectedValue(sendTweetError);
      tweetData = await sendTweet(tweet);
    } catch (error) {
      expect(addDoc).toThrowError(sendTweetError);
      expect(tweetData).toBeNull();
    }
  });
});
