import styled from 'styled-components';

import { adaptiveFont } from '@/utils/adaptiveFont';

export const StepsWrapper = styled.div`
  position: relative;
  max-width: 670px;
  width: 100%;
`;

export const TwitterLogo = styled.img`
  width: 40px;
  height: 33px;
  margin: 0 auto 43px auto;

  @media (max-width: 768px) {
    margin: 0 auto 20px auto;
  }
`;

export const Title = styled.h2`
  margin: 0 0 40px 0;
  font-family:
    Roboto Serif,
    sans-serif;
  font-size: ${adaptiveFont(30, 22)};
  font-weight: 700;

  @media (max-width: 768px) {
    margin: 0 0 20px 0;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  top: 115px;
  left: 0;
  color: ${(props) => props.theme.error};
  font-size: ${adaptiveFont(20, 16)};

  @media (max-width: 768px) {
    top: 80px;
  }
`;
