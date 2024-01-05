import styled from 'styled-components';
import ArrowBackSvg from '@/assets/icons/arrow_back.svg?react';

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 34px;
  font-family:
    Roboto Serif,
    sans-serif;
  font-size: 24px;
  font-weight: 700;
  border-bottom: 1px solid #d8d8d8;
`;

export const BackButton = styled.button`
  cursor: pointer;
`;

export const ArrowBack = styled(ArrowBackSvg)`
  width: 30px;
  height: 15px;
  margin: 0 12px 0 0;
`;
