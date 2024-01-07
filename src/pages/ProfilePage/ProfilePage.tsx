import React from 'react';
import { Outlet } from 'react-router-dom';
import { Border, Main, Page } from './ProfilePage.styled';
import { Menu } from '@/components/ui/Menu/Menu';
import { UsersAside } from '@/components/UsersAside/UsersAside';

export const ProfilePage = () => (
  <Page>
    <Menu />
    <Border />
    <Main>
      <Outlet />
    </Main>
    <Border />
    <UsersAside />
  </Page>
);
