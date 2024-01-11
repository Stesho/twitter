import React, { useEffect, useState } from 'react';
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
  SearchResultsWrapper,
} from '@/components/Aside/Aside.styled';
import DefaultAvatar from '@/assets/images/default_avatar.png';
import { getAllUsers } from '@/services/user/getAllUsers';
import { User } from '@/types/user';
import { useDebounce } from '@/hooks/useDebounce';
import { Loader } from '@/components/ui/Loader/Loader';
import { SearchResults } from '@/components/ui/SearchResults/SearchResults';

interface AsideProps {
  placeholder?: string;
  onSearch: (text: string) => Promise<User[]>;
  onResultClick: (userId: string, text: string) => void;
}

const Aside = ({ onSearch, onResultClick, placeholder }: AsideProps) => {
  const [text, setText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [recommendedUsers, setRecommendedUsers] = useState<User[]>([]);
  const [searchedUsers, setSearchedUsers] = useState<User[]>([]);
  const searchText = useDebounce(text, 600);

  const onResult = (userId: string) => () => {
    onResultClick(userId, searchText);
  };

  useEffect(() => {
    getAllUsers().then((users) => {
      if (users) {
        setRecommendedUsers(users);
      }
    });
  }, []);

  useEffect(() => {
    if (searchText) {
      if (searchedUsers.length === 0) {
        setIsSearching(true);
      }
      onSearch(searchText).then((usersResult) => {
        setSearchedUsers(usersResult);
        setIsSearching(false);
      });
    }
  }, [searchText, onSearch, searchedUsers.length]);

  return (
    <AsideWrapper>
      <Search placeholder={placeholder} text={text} onChange={setText} />
      <SearchResultsWrapper>
        <ResultsTitle>
          {searchText.length > 0 ? 'Search Results' : 'You might like'}
        </ResultsTitle>
        {isSearching ? (
          <Loader />
        ) : (
          <SearchResults searchText={searchText} users={recommendedUsers}>
            {searchedUsers.length === 0 ? (
              <NoResults>No results</NoResults>
            ) : (
              <ul>
                {searchedUsers.map((user) => (
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
              </ul>
            )}
          </SearchResults>
        )}
      </SearchResultsWrapper>
    </AsideWrapper>
  );
};

export default Aside;
