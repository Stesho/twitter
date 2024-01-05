import React from 'react';
import { useSelector } from 'react-redux';
import { Tweet, TweetProps } from '@/components/ui/Tweet/Tweet';
import { Tweet as TweetType } from '@/types/tweet';
import { NoTweets, TweetsLoader } from './Tweets.styled';
import { Loader } from '@/components/ui/Loader/Loader';
import { userSelector } from '@/store/selectors/userSelectors';

type TweetPropsOmitted = Omit<
  TweetProps,
  'tweet' | 'isLikedByUser' | 'isUserAuthor'
>;

interface TweetsProps extends TweetPropsOmitted {
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
  const { user } = useSelector(userSelector);

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
            isLikedByUser={tweet.likes.indexOf(user!.id) !== -1}
            isUserAuthor={tweet.author.id === user!.id}
          />
        ))
      )}
    </div>
  );
};
