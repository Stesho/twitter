import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tweet } from '@/types/tweet';
import { getTweetsByText } from '@/services/tweets/getTweetsByText';
import Aside from '@/components/Aside/Aside';
import {
  NoResults,
  ResultsImg,
  ResultsInfo,
  ResultsItem,
  ResultsName,
  ResultsUsername,
} from '@/components/Aside/Aside.styled';

export const TweetsAside = () => {
  const navigate = useNavigate();
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const onResultClick = (tweetId: string) => () => {
    navigate(`/home/${tweetId}`);
  };

  const search = async (text: string) => {
    const tweetsData = await getTweetsByText(text);
    if (tweetsData) {
      setTweets(tweetsData);
    }
  };

  return (
    <Aside placeholder='Search tweets' onSearch={search}>
      {tweets.length === 0 ? (
        <NoResults>No results</NoResults>
      ) : (
        <ul>
          {tweets.map((tweet) => (
            <ResultsItem key={tweet.id} onClick={onResultClick(tweet.id)}>
              <ResultsImg src={tweet.author.avatar} alt='avatar' />
              <ResultsInfo>
                <ResultsName>{tweet.author.name}</ResultsName>
                <ResultsUsername>{tweet.author.email}</ResultsUsername>
              </ResultsInfo>
            </ResultsItem>
          ))}
        </ul>
      )}
    </Aside>
  );
};
