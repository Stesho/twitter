import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from '@/components/ui/Search/Search';
import {
  AsideWrapper,
  NoResults,
  ResultsImg,
  ResultsInfo,
  ResultsItem,
  ResultsName,
  ResultsTitle,
  ResultsUsername,
  SearchResults,
} from '@/components/Aside/Aside.styled';
import { Tweet } from '@/types/tweet';
import { getTweetsByText } from '@/services/tweets/getTweetsByText';

const Aside = () => {
  const navigate = useNavigate();
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const onResultClick = (tweetId: string) => () => {
    navigate(`/tweets/${tweetId}`);
  };

  const search = async (text: string) => {
    const tweetsData = await getTweetsByText(text);
    if (tweetsData) {
      setTweets(tweetsData);
    }
  };

  return (
    <AsideWrapper>
      <Search onSearch={search} placeholder='Search Twitter' />
      <SearchResults>
        <ResultsTitle>Search Results</ResultsTitle>
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
      </SearchResults>
    </AsideWrapper>
  );
};

export default Aside;
