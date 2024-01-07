import React, { useMemo } from 'react';
import { collection, orderBy, query } from 'firebase/firestore';
import { Head } from '@/pages/HomePage/HomePage.styled';
import { Switch } from '@/components/ui/Switch/Switch';
import { NewTweet } from '@/components/ui/NewTweet/NewTweet';
import { Tweets } from '@/components/ui/Tweets/Tweets';
import { User } from '@/types/user';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { useTweetsSnapshot } from '@/hooks/useTweetsSnapshot';

interface FeedProps {
  user: User;
}

const Feed = ({ user }: FeedProps) => {
  const tweetsQuery = useMemo(
    () => query(collection(db, Collections.Tweets), orderBy('date', 'desc')),
    [],
  );
  const { tweets, isTweetsLoading } = useTweetsSnapshot(tweetsQuery);

  return (
    <>
      <Head>
        <span>Home</span>
        <Switch onChange={() => {}} />
      </Head>
      <NewTweet user={user} />
      <Tweets tweets={tweets} isLoading={isTweetsLoading} user={user} />
    </>
  );
};

export default Feed;
