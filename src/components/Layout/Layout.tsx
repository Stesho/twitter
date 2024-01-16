import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RootRoute } from '@/routing/RootRoute';
import { LayoutWrapper } from '@/components/Layout/Layout.styled';
import { Notification } from '@/components/ui/Notification/Notification';

export const Layout = () => (
  <LayoutWrapper>
    <BrowserRouter>
      <RootRoute />
      <Notification />
    </BrowserRouter>
  </LayoutWrapper>
);
