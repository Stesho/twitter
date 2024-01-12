import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  AsideWrapper,
  Border,
  HeaderWrapper,
  Main,
  MenuWrapper,
  Page,
} from './HomePage.styled';
import { Menu } from '@/components/ui/Menu/Menu';
import { TweetsAside } from '@/components/TweetsAside/TweetsAside';
import { Header } from '@/components/ui/Header/Header';

export const HomePage = () => (
  <Page>
    <HeaderWrapper>
      <Header>
        <TweetsAside />
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
      <TweetsAside />
    </AsideWrapper>
  </Page>
);
