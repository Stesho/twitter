import {
  collection,
  getDocs,
  query,
  QuerySnapshot,
  where,
} from 'firebase/firestore';
import { User } from '@/types/user';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { Tweet } from '@/types/tweet';

export const getTweets = async (user: User): Promise<Tweet[] | null> => {
  try {
    const tweetsQuery = query(
      collection(db, Collections.Tweets),
      where('author.id', '==', user.id),
    );

    const querySnapshot: QuerySnapshot = await getDocs(tweetsQuery);

    const tweets = querySnapshot.docs.map(
      (tweetDoc) => tweetDoc.data() as Tweet,
    );

    return tweets;
  } catch (error) {
    console.error(error);
    return null;
  }
};
