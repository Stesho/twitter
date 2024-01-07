import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Aside from '@/components/Aside/Aside';
import {
  NoResults,
  ResultsImg,
  ResultsInfo,
  ResultsItem,
  ResultsName,
  ResultsUsername,
} from '@/components/Aside/Aside.styled';
import { User } from '@/types/user';
import { getUsersByName } from '@/services/user/getUsersByName';

export const UsersAside = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  const onResultClick = (userId: string) => () => {
    navigate(`/profile/${userId}`);
  };

  const search = async (text: string) => {
    const usersData = await getUsersByName(text);
    if (usersData) {
      setUsers(usersData);
    }
  };

  return (
    <Aside placeholder='Search users' onSearch={search}>
      {users.length === 0 ? (
        <NoResults>No results</NoResults>
      ) : (
        <ul>
          {users.map((user) => (
            <ResultsItem key={user.id} onClick={onResultClick(user.id)}>
              <ResultsImg src={user.avatar} alt='avatar' />
              <ResultsInfo>
                <ResultsName>{user.name}</ResultsName>
                <ResultsUsername>{user.email}</ResultsUsername>
              </ResultsInfo>
            </ResultsItem>
          ))}
        </ul>
      )}
    </Aside>
  );
};
