import { doc, updateDoc } from 'firebase/firestore';

import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { Tweet } from '@/types/tweet';

export const updateTweet = async (tweet: Tweet) => {
  try {
    const tweetDocRef = doc(db, Collections.Tweets, tweet.id);
    await updateDoc(tweetDocRef, {
      ...tweet,
    });
    return tweet;
  } catch (error) {
    console.error(error);
    return null;
  }
};
