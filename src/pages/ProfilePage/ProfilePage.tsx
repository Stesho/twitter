import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '@/components/Aside/Aside';
import { Border, Main, Page } from './ProfilePage.styled';
import { Menu } from '@/components/ui/Menu/Menu';

export const ProfilePage = () => (
  <Page>
    <Menu />
    <Border />
    <Main>
      <Outlet />
    </Main>
    <Border />
    <Aside placeholder='Search users' />
  </Page>
);
