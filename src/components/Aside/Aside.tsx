import React, { useState } from 'react';
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

const Aside = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  return (
    <AsideWrapper>
      <Search setTweets={setTweets} placeholder='Search Twitter' />
      <SearchResults>
        <ResultsTitle>Search Results</ResultsTitle>
        {tweets.length === 0 ? (
          <NoResults>No results</NoResults>
        ) : (
          <ul>
            {tweets.map((tweet) => (
              <ResultsItem key={tweet.id}>
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
