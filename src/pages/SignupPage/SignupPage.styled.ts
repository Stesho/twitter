import styled from 'styled-components';
import { NeutralButton } from '@/components/ui/Button/Button.styled';

export const Content = styled.div`
  display: flex;
`;

export const BgImg = styled.img`
  width: 1121px;
  height: 100vh;
  object-fit: cover;
`;

export const Join = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 41px;
`;

export const TwitterLogo = styled.img`
  width: 50px;
  height: 41px;
  margin: 0 0 57px 0;
`;

export const Title = styled.h1`
  margin: 0 0 46px 0;
  font-family: Roboto, sans-serif;
  font-size: 84px;
  font-weight: 900;
`;

export const SubTitle = styled.h2`
  margin: 0 0 31px 0;
  font-family: Roboto, sans-serif;
  font-size: 42px;
  font-weight: 900;
`;

export const GoogleSignUpButton = styled(NeutralButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 403px;
  padding: 14px 0;
  margin: 0 0 21px 0;
`;

export const GoogleLogo = styled.img`
  width: 31px;
  height: 32px;
  margin: 0 5px 0 0;
`;

export const EmailSignUpButton = styled(NeutralButton)`
  width: 403px;
  margin: 0 0 21px 0;
`;

export const TermsOfUse = styled.p`
  width: 403px;
  margin: 10px 0 21px 0;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const ToLogIn = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 18px 0;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  font-weight: 400;

  & a {
    padding: 0 9px;
  }
`;
