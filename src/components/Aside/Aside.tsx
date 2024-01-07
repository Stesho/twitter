import React, { ReactNode } from 'react';
import { Search } from '@/components/ui/Search/Search';
import {
  AsideWrapper,
  ResultsTitle,
  SearchResults,
} from '@/components/Aside/Aside.styled';

interface AsideProps {
  placeholder?: string;
  onSearch: (text: string) => void;
  children: ReactNode;
}

const Aside = ({ onSearch, children, placeholder }: AsideProps) => (
  <AsideWrapper>
    <Search onSearch={onSearch} placeholder={placeholder} />
    <SearchResults>
      <ResultsTitle>Search Results</ResultsTitle>
      {children}
    </SearchResults>
  </AsideWrapper>
);

export default Aside;
