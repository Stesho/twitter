import styled from 'styled-components';
import ArrowIconSvg from '@/assets/icons/arrow.svg?react';

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
  font-size: 18px;
  font-weight: 400;
  outline: none;

  cursor: pointer;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  font-size: 14px;
  color: ${(props) => props.theme.error};
`;
