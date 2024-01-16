import { deleteDoc } from 'firebase/firestore';

import { deleteTweet } from '@/services/tweets/deleteTweet';

jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  deleteDoc: jest.fn(),
}));

jest.mock('@/db/firesbase', () => ({
  db: {},
}));

describe('delete tweet', () => {
  it('should delete tweet document from tweets collection', async () => {
    const tweetId = 'id';
    const tweetData = await deleteTweet(tweetId);

    expect(deleteDoc).toHaveBeenCalled();
    expect(tweetData).toBeUndefined();
  });

  it('should return null if error', async () => {
    const deleteTweetError = new Error('Error in delete tweet');
    const tweetId = 'id';
    let tweetData;

    try {
      (deleteDoc as jest.Mock).mockRejectedValue(deleteTweetError);
      tweetData = await deleteTweet(tweetId);
    } catch (error) {
      expect(deleteDoc).toThrowError(deleteTweetError);
      expect(tweetData).toBeNull();
    }
  });
});
