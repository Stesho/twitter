import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '@/store/selectors/userSelectors';
import { Loader } from '@/components/ui/Loader/Loader';
import { Profile } from '@/components/Profile/Profile';

export const ProfileOutlet = () => {
  const { user } = useSelector(userSelector);

  return user ? <Profile user={user} /> : <Loader />;
};
