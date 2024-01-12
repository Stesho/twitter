import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { Tweet } from '@/types/tweet';

export const sendTweet = async (
  tweet: Omit<Tweet, 'id'>,
): Promise<Tweet | null> => {
  try {
    const tweetDoc = await addDoc(collection(db, Collections.Tweets), tweet);
    return {
      ...tweet,
      id: tweetDoc.id,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
