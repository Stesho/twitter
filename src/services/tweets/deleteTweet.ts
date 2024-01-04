import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';

export const deleteTweet = async (tweetId: string) => {
  try {
    const tweetRef = doc(db, Collections.Tweets, tweetId);
    return await deleteDoc(tweetRef);
  } catch (error) {
    console.error(error);
    return null;
  }
};
