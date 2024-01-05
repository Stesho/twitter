import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { Tweet } from '@/types/tweet';

export const getTweetById = async (tweetId: string): Promise<Tweet | null> => {
  try {
    const tweetsQuery = doc(db, Collections.Tweets, tweetId);
    const tweetDoc = await getDoc(tweetsQuery);

    const tweetData = tweetDoc.data() as Tweet;
    return {
      ...tweetData,
      id: tweetDoc.id,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
