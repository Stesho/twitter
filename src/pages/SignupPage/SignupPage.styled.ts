import styled from 'styled-components';

import { NeutralButton } from '@/components/ui/Button/Button.styled';
import { adaptiveFont } from '@/utils/adaptiveFont';

export const Content = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr auto;
`;

export const BgImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Join = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 41px;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const TwitterLogo = styled.img`
  width: 50px;
  height: 41px;
  margin: 0 0 57px 0;

  @media (max-width: 768px) {
    margin: 0 0 20px 0;
  }
`;

export const Title = styled.h1`
  margin: 0 0 46px 0;
  font-family: Roboto, sans-serif;
  font-size: ${adaptiveFont(84, 42)};
  font-weight: 900;

  @media (max-width: 768px) {
    margin: 0 0 23px 0;
  }
`;

export const SubTitle = styled.h2`
  margin: 0 0 31px 0;
  font-family: Roboto, sans-serif;
  font-size: ${adaptiveFont(42, 21)};
  font-weight: 900;
`;

export const GoogleSignUpButton = styled(NeutralButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 403px;
  width: 100%;
  padding: 14px 0;
  margin: 0 0 21px 0;
`;

export const GoogleLogo = styled.img`
  width: 31px;
  height: 32px;
  margin: 0 5px 0 0;

  @media (max-width: 768px) {
    width: 19px;
    height: 19px;
  }
`;

export const EmailSignUpButton = styled(NeutralButton)`
  max-width: 403px;
  width: 100%;
  margin: 0 0 21px 0;
`;

export const TermsOfUse = styled.p`
  max-width: 403px;
  width: 100%;
  margin: 10px 0 21px 0;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const ToLogIn = styled.p`
  font-family: Roboto, sans-serif;
  font-size: ${adaptiveFont(16, 14)};
  font-weight: 400;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 18px;
  flex-wrap: wrap;
  gap: 18px;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  font-weight: 400;
`;
