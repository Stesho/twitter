import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '@/store/selectors/userSelectors';
import { Profile } from '@/components/Profile/Profile';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { Loader } from '@/components/ui/Loader/Loader';

export const ProfilePage = () => {
  const { user } = useSelector(userSelector);

  if (!user) {
    return (
      <PageWrapper>
        <Loader />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Profile user={user!} />
    </PageWrapper>
  );
};
