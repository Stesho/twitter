import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { collection, orderBy, query } from 'firebase/firestore';

import { Loader } from '@/components/ui/Loader/Loader';
import { NewTweet } from '@/components/ui/NewTweet/NewTweet';
import { Switch } from '@/components/ui/Switch/Switch';
import { Tweets } from '@/components/ui/Tweets/Tweets';
import { db } from '@/db/firesbase';
import { useTweetsSnapshot } from '@/hooks/useTweetsSnapshot';
import { userSelector } from '@/store/selectors/selectors';
import { Collections } from '@/types/collections';

import { FeedTweets, Head } from './Feed.styled';

export const Feed = () => {
  const { user } = useSelector(userSelector);
  const tweetsQuery = useMemo(
    () => query(collection(db, Collections.Tweets), orderBy('date', 'desc')),
    [],
  );
  const { tweets, isTweetsLoading } = useTweetsSnapshot(tweetsQuery);

  if (!user) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <span>Home</span>
        <Switch />
      </Head>
      <NewTweet user={user} />
      {tweets.length === 0 ? (
        <FeedTweets>
          <Tweets tweets={tweets} isLoading={isTweetsLoading} user={user} />
        </FeedTweets>
      ) : (
        <Tweets tweets={tweets} isLoading={isTweetsLoading} user={user} />
      )}
    </>
  );
};
