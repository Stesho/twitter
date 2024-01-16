import React, { ReactNode, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/ui/Header/Header';
import { Menu } from '@/components/ui/Menu/Menu';
import { getAllUsers } from '@/services/user/getAllUsers';
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
  const [recommendedUsers, setRecommendedUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers().then((users) => {
      if (users) {
        setRecommendedUsers(users);
      }
    });
  }, []);

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
