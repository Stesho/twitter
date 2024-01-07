import React, { ReactNode } from 'react';
import { Menu } from '@/components/ui/Menu/Menu';
import {
  Main,
  Page,
  Border,
} from '@/components/PageWrapper/PageWrapper.styled';
import Aside from '@/components/Aside/Aside';

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => (
  <Page>
    <Menu />
    <Border />
    <Main>{children}</Main>
    <Border />
    <Aside />
  </Page>
);
