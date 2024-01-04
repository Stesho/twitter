import React, { useEffect, useState } from 'react';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { NewTweet } from '@/components/ui/NewTweet/NewTweet';
import { Tweet } from '@/types/tweet';
import { getAllTweets } from '@/services/tweets/getAllTweets';
import { Tweets } from '@/components/ui/Tweets/Tweets';

export const HomePage = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllTweets().then((tweetsData) => {
      if (tweetsData) {
        setTweets(tweetsData);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <PageWrapper>
      <NewTweet onTweet={() => {}} />
      <Tweets
        tweets={tweets}
        isLoading={isLoading}
        onDeleteTweet={() => {}}
        onUpdateTweet={() => {}}
        onLike={() => {}}
      />
    </PageWrapper>
  );
};
