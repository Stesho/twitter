import { updateDoc } from 'firebase/firestore';
import { Tweet } from '@/types/tweet';
import { updateTweet } from '@/services/tweets/updateTweet';

jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  updateDoc: jest.fn(),
}));

jest.mock('@/db/firesbase', () => ({
  db: {},
}));

describe('update tweet', () => {
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

  it('should update tweet document into tweets collection', async () => {
    const tweetData = await updateTweet(tweet);

    expect(updateDoc).toHaveBeenCalled();
    expect(tweetData).toEqual(tweet);
  });

  it('should return null if error', async () => {
    let tweetData;
    const updateTweetError = new Error('Error in update tweet');

    try {
      (updateDoc as jest.Mock).mockRejectedValue(updateTweetError);
      tweetData = await updateTweet(tweet);
    } catch (error) {
      expect(updateDoc).toThrowError(updateTweetError);
      expect(tweetData).toBeNull();
    }
  });
});
