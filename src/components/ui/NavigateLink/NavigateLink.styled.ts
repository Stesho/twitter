import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { lighten } from 'polished';

export const NavLinkWrapper = styled(NavLink)`
  color: ${(props) => props.theme.bgSecondaryLight100};
  font-family: Roboto, sans-serif;
  font-weight: 400;

  &:hover {
    color: ${(props) => lighten(0.2, props.theme.bgSecondaryLight100)};
  }
`;
