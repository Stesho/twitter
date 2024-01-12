import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RootRoute } from '@/routing/RootRoute';
import { LayoutWrapper } from '@/components/Layout/Layout.styled';

export const Layout = () => (
  <LayoutWrapper>
    <BrowserRouter>
      <RootRoute />
    </BrowserRouter>
  </LayoutWrapper>
);
