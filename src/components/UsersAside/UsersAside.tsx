import React from 'react';
import { useNavigate } from 'react-router-dom';
import Aside from '@/components/Aside/Aside';
import { getUsersByName } from '@/services/user/getUsersByName';

export const UsersAside = () => {
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
      placeholder='Search users'
      onSearch={search}
      onResultClick={onResultClick}
    />
  );
};
