import React from 'react';
import { useSelector } from 'react-redux';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { userSelector } from '@/store/selectors/userSelectors';
import Feed from '@/components/Feed/Feed';
import { Loader } from '@/components/ui/Loader/Loader';

export const HomePage = () => {
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
      <Feed user={user!} />
    </PageWrapper>
  );
};
