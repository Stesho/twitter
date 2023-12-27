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
import { Tweet } from '@/types/Tweet';

export const getTweets = async (user: User): Promise<Tweet[] | null> => {
  try {
    const tweets = query(
      collection(db, Collections.Tweets),
      where('authorId', '==', user.id),
    );

    const querySnapshot: QuerySnapshot = await getDocs(tweets);

    return querySnapshot.docs.map((doc) => doc.data() as Tweet);
  } catch (error) {
    console.error(error);
    return null;
  }
};
