import React from 'react';

import { NavLinkWrapper } from '@/components/ui/NavigateLink/NavigateLink.styled';

interface NavigateLinkProps {
  to: string;
  children: string;
}

export const NavigateLink = ({ children, to }: NavigateLinkProps) => (
  <NavLinkWrapper to={to}>{children}</NavLinkWrapper>
);
