import styled from 'styled-components';
import { PrimaryButton } from '@/components/ui/Button/Button.styled';

export const Nav = styled.nav`
  flex-shrink: 0;
  max-width: 336px;
  width: 100%;
  padding: 31px 53px;

  @media (max-width: 1440px) {
    max-width: 236px;
    padding: 31px 28px;
  }
`;

export const TwitterLogo = styled.img`
  width: 40px;
  height: 33px;
  margin: 0 0 49px 0;

  @media (max-width: 768px) {
    margin: 0 0 15px 0;
  }
`;

export const MenuList = styled.ul`
  margin: 0 0 30px 0;

  @media (max-width: 768px) {
    margin: 0 0 15px 0;
  }
`;

export const LogOutButton = styled(PrimaryButton)`
  font-family:
    Roboto Serif,
    sans-serif;
`;
