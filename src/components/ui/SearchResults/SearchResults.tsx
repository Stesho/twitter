import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '@/types/user';
import DefaultAvatar from '@/assets/images/default_avatar.png';
import {
  ResultsImg,
  ResultsInfo,
  ResultsName,
} from '@/components/Aside/Aside.styled';
import {
  FollowButton,
  ResultsItem,
  ResultsItemContent,
  ResultsUsername,
} from '@/components/ui/SearchResults/SearchResults.styled';

interface SearchResultsProps {
  searchText: string;
  users: User[];
  children: ReactNode;
}

export const SearchResults = ({
  searchText,
  users,
  children,
}: SearchResultsProps) => {
  const navigate = useNavigate();

  const onUserClick = (userId: string) => () => {
    navigate(`/profile/${userId}`);
  };

  return searchText.length > 0
    ? children
    : users.map((user) => (
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
      ));
};
