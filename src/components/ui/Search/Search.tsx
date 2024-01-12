import React, { ChangeEvent } from 'react';
import {
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from '@/components/ui/Search/Search.styled';

interface SearchProps {
  placeholder?: string;
  onChange: (text: string) => void;
  text: string;
}

export const Search = ({ placeholder, text, onChange }: SearchProps) => {
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <SearchWrapper>
      <SearchIcon data-cy='searchButton' />
      <SearchInput
        data-cy='search'
        value={text}
        onChange={onChangeValue}
        placeholder={placeholder}
      />
    </SearchWrapper>
  );
};
