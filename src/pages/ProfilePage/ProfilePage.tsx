import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  AsideWrapper,
  Border,
  HeaderWrapper,
  Main,
  MenuWrapper,
  Page,
} from './ProfilePage.styled';
import { Menu } from '@/components/ui/Menu/Menu';
import { UsersAside } from '@/components/UsersAside/UsersAside';
import { Header } from '@/components/ui/Header/Header';

export const ProfilePage = () => (
  <Page>
    <HeaderWrapper>
      <Header>
        <UsersAside />
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
      <UsersAside />
    </AsideWrapper>
  </Page>
);
