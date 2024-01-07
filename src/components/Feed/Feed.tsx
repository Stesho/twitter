import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { Head } from '@/pages/HomePage/HomePage.styled';
import { Switch } from '@/components/ui/Switch/Switch';
import { NewTweet } from '@/components/ui/NewTweet/NewTweet';
import { Tweets } from '@/components/ui/Tweets/Tweets';
import { sendTweet } from '@/services/tweets/sendTweet';
import { Tweet, Tweet as TweetType } from '@/types/tweet';
import { User } from '@/types/user';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';

interface FeedProps {
  user: User;
}

const Feed = ({ user }: FeedProps) => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onTweet = async (text: string) => {
    await sendTweet({
      text,
      date: new Date().toISOString(),
      author: user,
      likes: [],
    });
  };

  useEffect(() => {
    const tweetsQuery = query(
      collection(db, Collections.Tweets),
      orderBy('date', 'desc'),
    );

    setIsLoading(true);
    const unsubscribe = onSnapshot(tweetsQuery, (snapshot) => {
      const updatedTweets = snapshot.docs.map((tweetDoc) => {
        const tweetData = tweetDoc.data();
        return {
          id: tweetDoc.id,
          ...tweetData,
        };
      }) as TweetType[];

      setIsLoading(false);
      setTweets(updatedTweets);
    });

    return unsubscribe;
  }, [user.id]);

  return (
    <>
      <Head>
        <span>Home</span>
        <Switch onChange={() => {}} />
      </Head>
      <NewTweet iconUrl={user.avatar} onTweet={onTweet} />
      <Tweets tweets={tweets} isLoading={isLoading} user={user} />
    </>
  );
};

export default Feed;
