import React from 'react';
import { Outlet } from 'react-router-dom';
import { Border, Main, Page } from './HomePage.styled';
import { Menu } from '@/components/ui/Menu/Menu';
import { TweetsAside } from '@/components/TweetsAside/TweetsAside';

export const HomePage = () => (
  <Page>
    <Menu />
    <Border />
    <Main>
      <Outlet />
    </Main>
    <Border />
    <TweetsAside />
  </Page>
);
