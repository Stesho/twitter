import React, { ReactNode, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { collection, query } from 'firebase/firestore';

import { Header } from '@/components/ui/Header/Header';
import { Menu } from '@/components/ui/Menu/Menu';
import { db } from '@/db/firesbase';
import { useSnapshot } from '@/hooks/useSnapshot';
import { Collections } from '@/types/collections';
import { User } from '@/types/user';

import {
  AsideWrapper,
  Border,
  HeaderWrapper,
  Main,
  MenuWrapper,
  PageWrapper,
} from './Page.styled';

interface PageProps {
  Aside: (props: { users: User[] }) => ReactNode;
}

export const Page = ({ Aside }: PageProps) => {
  const usersQuery = useMemo(
    () => query(collection(db, Collections.Users)),
    [],
  );
  const [recommendedUsers] = useSnapshot<User>(usersQuery);

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Header>
          <Aside users={recommendedUsers} />
        </Header>
      </HeaderWrapper>
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
      <Border />
      <Main>
        <Outlet />
      </Main>
      <Border />
      <AsideWrapper>
        <Aside users={recommendedUsers} />
      </AsideWrapper>
    </PageWrapper>
  );
};
