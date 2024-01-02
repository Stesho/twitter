import styled from 'styled-components';
import { PrimaryButton } from '@/components/ui/Button/Button.styled';

export const Nav = styled.nav`
  flex-shrink: 0;
  width: 230px;
  margin: 31px 53px 0 0;
`;

export const TwitterLogo = styled.img`
  width: 40px;
  height: 33px;
  margin: 0 0 49px 0;
`;

export const MenuList = styled.ul`
  margin: 0 0 30px 0;
`;

export const LogOutButton = styled(PrimaryButton)`
  font-family:
    Roboto Serif,
    sans-serif;
`;
