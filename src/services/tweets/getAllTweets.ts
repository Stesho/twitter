import {
  collection,
  query,
  orderBy,
  QuerySnapshot,
  getDocs,
} from 'firebase/firestore';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { Tweet } from '@/types/tweet';

export const getAllTweets = async (): Promise<Tweet[] | null> => {
  try {
    const tweetsQuery = query(
      collection(db, Collections.Tweets),
      orderBy('date', 'desc'),
    );

    const querySnapshot: QuerySnapshot = await getDocs(tweetsQuery);

    return querySnapshot.docs.map((tweetDoc) => {
      const tweetData = tweetDoc.data() as Tweet;
      return {
        ...tweetData,
        id: tweetDoc.id,
      };
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
