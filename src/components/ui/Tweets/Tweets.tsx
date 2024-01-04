import React from 'react';
import { Tweet, TweetProps } from '@/components/ui/Tweet/Tweet';
import { Tweet as TweetType } from '@/types/tweet';
import { NoTweets, TweetsLoader } from './Tweets.styled';
import { Loader } from '@/components/ui/Loader/Loader';

interface TweetsProps extends Omit<TweetProps, 'tweet'> {
  tweets: TweetType[];
  isLoading: boolean;
}

export const Tweets = ({
  tweets,
  onDeleteTweet,
  onUpdateTweet,
  onLike,
  isLoading,
}: TweetsProps) => {
  if (isLoading) {
    return (
      <TweetsLoader>
        <Loader />
      </TweetsLoader>
    );
  }

  return (
    <div>
      {tweets.length === 0 ? (
        <NoTweets>There are no tweets yet</NoTweets>
      ) : (
        tweets.map((tweet: TweetType) => (
          <Tweet
            key={tweet.id}
            tweet={tweet}
            onDeleteTweet={onDeleteTweet}
            onUpdateTweet={onUpdateTweet}
            onLike={onLike}
          />
        ))
      )}
    </div>
  );
};
