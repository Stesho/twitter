import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { Tweet } from '@/types/tweet';

export const getTweetsByText = async (text: string) => {
  try {
    const tweetQuery = query(
      collection(db, Collections.Tweets),
      where('text', '>=', text),
      where('text', '<=', `${text}~`),
    );

    const tweetDocs = await getDocs(tweetQuery);

    return tweetDocs.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Tweet[];
  } catch (error) {
    console.error(error);
    return null;
  }
};
