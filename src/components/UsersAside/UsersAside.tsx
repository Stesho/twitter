import React from 'react';
import { useNavigate } from 'react-router-dom';

import Aside, { AsideProps } from '@/components/Aside/Aside';
import { getUsersByName } from '@/services/user/getUsersByName';

type UsersAsideProps = Pick<AsideProps, 'users'>;

export const UsersAside = ({ users }: UsersAsideProps) => {
  const navigate = useNavigate();

  const onResultClick = (userId: string) => {
    navigate(`/profile/${userId}`);
  };

  const search = async (text: string) => {
    const usersData = await getUsersByName(text);
    return usersData || [];
  };

  return (
    <Aside
      users={users}
      placeholder='Search users'
      onSearch={search}
      onResultClick={onResultClick}
    />
  );
};
