import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { Tweet } from '@/types/tweet';

export const sendTweet = async (tweet: Tweet) => {
  try {
    await addDoc(collection(db, Collections.Tweets), tweet);
    return tweet;
  } catch (error) {
    console.error(error);
    return null;
  }
};
