import { useEffect, useState } from 'react';
import { onSnapshot, Query } from 'firebase/firestore';

import { Tweet as TweetType } from '@/types/tweet';

export const useTweetsSnapshot = (tweetsQuery: Query) => {
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [isTweetsLoading, setIsTweetsLoading] = useState(false);

  useEffect(() => {
    setIsTweetsLoading(true);
    const unsubscribe = onSnapshot(tweetsQuery, (snapshot) => {
      const updatedTweets = snapshot.docs.map((tweetDoc) => {
        const tweetData = tweetDoc.data();
        return {
          id: tweetDoc.id,
          ...tweetData,
        };
      }) as TweetType[];

      setIsTweetsLoading(false);
      setTweets(updatedTweets);
    });

    return unsubscribe;
  }, [tweetsQuery]);

  return {
    tweets,
    isTweetsLoading,
  };
};
