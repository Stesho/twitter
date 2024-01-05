import React, { ReactNode } from 'react';
import { Menu } from '@/components/ui/Menu/Menu';
import { Search } from '@/components/ui/Search/Search';
import {
  Main,
  Page,
  Border,
} from '@/components/PageWrapper/PageWrapper.styled';

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => (
  <Page>
    <Menu />
    <Border />
    <Main>{children}</Main>
    <Border />
    <aside>
      <Search />
      <div>
        <span>You might like</span>
      </div>
    </aside>
  </Page>
);
