import React, { useEffect, useState } from 'react';

import DefaultAvatar from '@/assets/images/default_avatar.png';
import {
  AsideWrapper,
  NoResults,
  ResultsImg,
  ResultsInfo,
  ResultsItem,
  ResultsList,
  ResultsName,
  ResultsTitle,
  ResultsUsername,
  SearchResultsWrapper,
  ShowMore,
} from '@/components/Aside/Aside.styled';
import { Loader } from '@/components/ui/Loader/Loader';
import { Search } from '@/components/ui/Search/Search';
import { SearchResults } from '@/components/ui/SearchResults/SearchResults';
import { useDebounce } from '@/hooks/useDebounce';
import { useWindowSize } from '@/hooks/useWindowSize';
import { User } from '@/types/user';

export interface AsideProps {
  placeholder?: string;
  onSearch: (text: string) => Promise<User[]>;
  onResultClick: (userId: string, text: string) => void;
  users: User[];
}

const Aside = ({ users, onSearch, onResultClick, placeholder }: AsideProps) => {
  const itemsDisplayCount = 3;
  const maxWindowSize = 1024;
  const [text, setText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchedUsers, setSearchedUsers] = useState<User[]>([]);
  const [displayCount, setDisplayCount] = useState(itemsDisplayCount);
  const [windowSize] = useWindowSize();
  const searchText = useDebounce(text, 600);

  const onResult = (userId: string) => () => {
    onResultClick(userId, searchText);
    if (windowSize[0] <= maxWindowSize) {
      setText('');
    }
  };

  const onShowMore = () => setDisplayCount((prev) => prev + itemsDisplayCount);

  useEffect(() => {
    if (searchText) {
      setIsSearching(true);
      onSearch(searchText).then((usersResult) => {
        setSearchedUsers(usersResult);
        setIsSearching(false);
      });
    }
  }, [searchText, onSearch, searchedUsers.length]);

  return (
    <AsideWrapper>
      <Search placeholder={placeholder} text={text} onChange={setText} />
      {(windowSize[0] > maxWindowSize ||
        (windowSize[0] <= maxWindowSize && searchText.length > 0)) && (
        <SearchResultsWrapper>
          <ResultsTitle>
            {searchText.length > 0 ? 'Search Results' : 'You might like'}
          </ResultsTitle>
          {isSearching ? (
            <Loader />
          ) : (
            <SearchResults
              searchText={searchText}
              users={users}
              displayCount={displayCount}
              onShowMore={onShowMore}
            >
              {searchedUsers.length === 0 ? (
                <NoResults>No results</NoResults>
              ) : (
                <>
                  <ResultsList>
                    {searchedUsers.slice(0, displayCount).map((user) => (
                      <ResultsItem key={user.id} onClick={onResult(user.id)}>
                        <ResultsImg
                          src={user.avatar || DefaultAvatar}
                          alt='avatar'
                        />
                        <ResultsInfo>
                          <ResultsName>{user.name}</ResultsName>
                          <ResultsUsername>{user.email}</ResultsUsername>
                        </ResultsInfo>
                      </ResultsItem>
                    ))}
                  </ResultsList>
                  {displayCount < searchedUsers.length && (
                    <ShowMore type='button' onClick={onShowMore}>
                      Show more
                    </ShowMore>
                  )}
                </>
              )}
            </SearchResults>
          )}
        </SearchResultsWrapper>
      )}
    </AsideWrapper>
  );
};

export default Aside;
