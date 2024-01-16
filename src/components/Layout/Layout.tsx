import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { LayoutWrapper } from '@/components/Layout/Layout.styled';
import { Notification } from '@/components/ui/Notification/Notification';
import { RootRoute } from '@/routing/RootRoute';

export const Layout = () => (
  <LayoutWrapper>
    <BrowserRouter>
      <RootRoute />
      <Notification />
    </BrowserRouter>
  </LayoutWrapper>
);
