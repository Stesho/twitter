import React from 'react';
import { useSelector } from 'react-redux';

import DefaultAvatar from '@/assets/images/default_avatar_big.png';
import { Loader } from '@/components/ui/Loader/Loader';
import { userSelector } from '@/store/selectors/selectors';

import {
  Avatar,
  MenuProfileWrapper,
  Name,
  Username,
} from './MenuProfile.styles';

export const MenuProfile = () => {
  const { user } = useSelector(userSelector);

  if (!user) {
    return <Loader />;
  }

  return (
    <MenuProfileWrapper>
      <Avatar src={user.avatar || DefaultAvatar} />
      <div>
        <Name>{user.name}</Name>
        <Username>@{user.username}</Username>
      </div>
    </MenuProfileWrapper>
  );
};
