import styled from 'styled-components';
import ArrowIconSvg from '@/assets/icons/arrow.svg?react';
import { adaptiveFont } from '@/utils/adaptiveFont';

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  font-family: Roboto, sans-serif;
`;

export const ArrowIcon = styled(ArrowIconSvg)`
  position: absolute;
  width: 28px;
  height: 28px;
  top: 50%;
  left: 100%;
  transform: translate(-150%, -50%);
  pointer-events: none;
`;

export const SelectButton = styled.select<{
  $isError: boolean;
}>`
  appearance: none;
  -webkit-appearance: none;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 20px;
  border-radius: 6px;
  border: 1px solid
    ${(props) => (props.$isError ? props.theme.error : props.theme.border300)};
  background: ${(props) => props.theme.bgPrimary};
  color: ${(props) => props.theme.textDark500};
  font-size: ${adaptiveFont(18, 14)};
  font-weight: 400;
  outline: none;

  cursor: pointer;

  @media (max-width: 768px) {
    padding: 13px 12px;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  font-size: ${adaptiveFont(14, 12)};
  color: ${(props) => props.theme.error};
`;
