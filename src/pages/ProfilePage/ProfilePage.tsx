import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '@/components/Aside/Aside';
import { Border, Page } from './ProfilePage.styled';
import { Menu } from '@/components/ui/Menu/Menu';

export const ProfilePage = () => (
  <Page>
    <Menu />
    <Border />
    <Outlet />
    <Border />
    <Aside placeholder='Search users' />
  </Page>
);
