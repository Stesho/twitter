import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { collection, orderBy, query } from 'firebase/firestore';
import { Switch } from '@/components/ui/Switch/Switch';
import { NewTweet } from '@/components/ui/NewTweet/NewTweet';
import { Tweets } from '@/components/ui/Tweets/Tweets';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';
import { useTweetsSnapshot } from '@/hooks/useTweetsSnapshot';
import { FeedTweets, Head } from './Feed.styled';
import { userSelector } from '@/store/selectors/userSelectors';
import { Loader } from '@/components/ui/Loader/Loader';

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
        <Switch onChange={() => {}} />
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
