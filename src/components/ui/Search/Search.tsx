import React, { ChangeEvent, useState } from 'react';
import {
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from '@/components/ui/Search/Search.styled';

interface SearchProps {
  placeholder?: string;
  onSearch: (text: string) => void;
}

export const Search = ({ onSearch, placeholder }: SearchProps) => {
  const [text, setText] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const search = () => {
    onSearch(text);
  };

  return (
    <SearchWrapper>
      <SearchIcon onClick={search} />
      <SearchInput value={text} onChange={onChange} placeholder={placeholder} />
    </SearchWrapper>
  );
};
