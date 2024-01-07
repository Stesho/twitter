import React, { ChangeEvent, useState } from 'react';
import {
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from '@/components/ui/Search/Search.styled';
import { Tweet } from '@/types/tweet';
import { getTweetsByText } from '@/services/tweets/getTweetsByText';

interface SearchProps {
  placeholder?: string;
  setTweets: (tweets: Tweet[]) => void;
}

export const Search = ({ setTweets, placeholder }: SearchProps) => {
  const [text, setText] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const search = async () => {
    const tweetsData = await getTweetsByText(text);
    if (tweetsData) {
      setTweets(tweetsData);
    }
  };

  return (
    <SearchWrapper>
      <SearchIcon onClick={search} />
      <SearchInput value={text} onChange={onChange} placeholder={placeholder} />
    </SearchWrapper>
  );
};
