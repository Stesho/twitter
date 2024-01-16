import React, { ReactNode, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/ui/Header/Header';
import { Menu } from '@/components/ui/Menu/Menu';
import {
  PageWrapper,
  AsideWrapper,
  Border,
  HeaderWrapper,
  Main,
  MenuWrapper,
} from './Page.styled';
import { getAllUsers } from '@/services/user/getAllUsers';
import { User } from '@/types/user';

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
