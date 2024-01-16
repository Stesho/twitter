import React from 'react';
import { useSelector } from 'react-redux';

import { Profile } from '@/components/Profile/Profile';
import { Loader } from '@/components/ui/Loader/Loader';
import { userSelector } from '@/store/selectors/selectors';

export const ProfileOutlet = () => {
  const { user } = useSelector(userSelector);

  return user ? <Profile user={user} /> : <Loader />;
};
