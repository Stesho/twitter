import React from 'react';
import { useSelector } from 'react-redux';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { userSelector } from '@/store/selectors/userSelectors';
import Feed from '@/components/Feed/Feed';

export const HomePage = () => {
  const { user } = useSelector(userSelector);

  return (
    <PageWrapper>
      <Feed user={user!} />
    </PageWrapper>
  );
};
