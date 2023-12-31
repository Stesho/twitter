import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkWrapper = styled(NavLink)`
  color: #1e97e1;
  font-family: Roboto, sans-serif;
  font-weight: 400;

  &:hover {
    color: #4fbfff;
  }
`;
