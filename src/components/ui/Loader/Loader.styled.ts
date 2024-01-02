import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 7px solid black;
  border-top: 7px solid transparent;
  border-radius: 50%;
  animation: ${rotate} 0.9s linear infinite;
`;
