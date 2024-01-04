import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '@/store/selectors/userSelectors';
import { Profile } from '@/components/Profile/Profile';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';

export const ProfilePage = () => {
  const { user } = useSelector(userSelector);

  return (
    <PageWrapper>
      <Profile user={user!} />
    </PageWrapper>
  );
};
