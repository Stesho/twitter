import styled from 'styled-components';
import ArrowIconSvg from '@/assets/icons/arrow.svg?react';

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  font-family: Roboto, sans-serif;
`;

export const SelectButton = styled.select`
  appearance: none;
  -webkit-appearance: none;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 20px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  font-size: 18px;
  font-weight: 400;

  cursor: pointer;
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
