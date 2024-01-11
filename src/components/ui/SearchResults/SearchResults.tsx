import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '@/types/user';
import DefaultAvatar from '@/assets/images/default_avatar.png';
import {
  ResultsImg,
  ResultsInfo,
  ResultsName,
  ShowMore,
} from '@/components/Aside/Aside.styled';
import {
  FollowButton,
  ResultsItem,
  ResultsItemContent,
  ResultsUsername,
} from '@/components/ui/SearchResults/SearchResults.styled';
import { useWindowSize } from '@/hooks/useWindowSize';

interface SearchResultsProps {
  searchText: string;
  users: User[];
  children: ReactNode;
  displayCount: number;
  onShowMore: () => void;
}

export const SearchResults = ({
  searchText,
  users,
  children,
  displayCount,
  onShowMore,
}: SearchResultsProps) => {
  const [windowSize] = useWindowSize();
  const navigate = useNavigate();
  const maxWindowSize = 1024;

  const onUserClick = (userId: string) => () => {
    navigate(`/profile/${userId}`);
  };

  return searchText.length > 0 || windowSize[0] <= maxWindowSize ? (
    children
  ) : (
    <>
      {users.slice(0, displayCount).map((user) => (
        <ResultsItem key={user.id} onClick={onUserClick(user.id)}>
          <ResultsItemContent>
            <ResultsImg src={user.avatar || DefaultAvatar} alt='avatar' />
            <ResultsInfo>
              <ResultsName>{user.name}</ResultsName>
              <ResultsUsername>{user.email}</ResultsUsername>
            </ResultsInfo>
          </ResultsItemContent>
          <FollowButton>Follow</FollowButton>
        </ResultsItem>
      ))}
      {displayCount < users.length && (
        <ShowMore type='button' onClick={onShowMore}>
          Show more
        </ShowMore>
      )}
    </>
  );
};
