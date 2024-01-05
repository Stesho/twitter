import React, { useEffect, useState } from 'react';
import { Head } from '@/pages/HomePage/HomePage.styled';
import { Switch } from '@/components/ui/Switch/Switch';
import { NewTweet } from '@/components/ui/NewTweet/NewTweet';
import { Tweets } from '@/components/ui/Tweets/Tweets';
import { sendTweet } from '@/services/tweets/sendTweet';
import { deleteTweet } from '@/services/tweets/deleteTweet';
import { Tweet, Tweet as TweetType } from '@/types/tweet';
import { updateTweet } from '@/services/tweets/updateTweet';
import { User } from '@/types/user';
import { getAllTweets } from '@/services/tweets/getAllTweets';

interface FeedProps {
  user: User;
}

const Feed = ({ user }: FeedProps) => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const onTweet = async (text: string) => {
    const tweet = await sendTweet({
      text,
      date: new Date().toISOString(),
      author: user,
      likes: [],
    });

    if (tweet) {
      setTweets((prevTweets) => [tweet, ...prevTweets]);
    }
  };

  const onDeleteTweet = async (tweetId: string) => {
    const deletedTweet = await deleteTweet(tweetId);

    if (deletedTweet === null) {
      return null;
    }

    return setTweets((prevTweets) => [
      ...prevTweets.filter((tweet) => tweet.id !== tweetId),
    ]);
  };

  const onUpdateTweet = async (newTweet: TweetType) => {
    const updatedTweet = await updateTweet(newTweet);

    if (updatedTweet === null) {
      return null;
    }

    return setTweets((prevTweets) => [
      ...prevTweets.map((tweet) =>
        tweet.id === newTweet.id ? newTweet : tweet,
      ),
    ]);
  };

  const onLike = async (tweet: TweetType) => {
    const newLikes =
      tweet.likes.indexOf(user.id) !== -1
        ? [...tweet.likes.filter((userId) => userId !== user.id)]
        : [user.id, ...tweet.likes];

    await onUpdateTweet({
      ...tweet,
      likes: newLikes,
    });
  };

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
    <>
      <Head>
        <span>Home</span>
        <Switch onChange={() => {}} />
      </Head>
      <NewTweet onTweet={onTweet} />
      <Tweets
        tweets={tweets}
        isLoading={isLoading}
        onDeleteTweet={onDeleteTweet}
        onUpdateTweet={onUpdateTweet}
        onLike={onLike}
      />
    </>
  );
};

export default Feed;
