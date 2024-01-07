import React from 'react';
import { Outlet } from 'react-router-dom';
import { Border, Main, Page } from './HomePage.styled';
import { Menu } from '@/components/ui/Menu/Menu';
import Aside from '@/components/Aside/Aside';

export const HomePage = () => (
  <Page>
    <Menu />
    <Border />
    <Main>
      <Outlet />
    </Main>
    <Border />
    <Aside placeholder='Search Tweet' />
  </Page>
);
