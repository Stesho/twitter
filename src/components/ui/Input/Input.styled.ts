import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputStyled = styled.input<{
  $isError: boolean;
}>`
  width: 100%;
  padding: 23px 20px 26px 20px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid ${(props) => (props.$isError ? '#ff0000' : '#00000033')};
  background: #fff;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  outline: none;

  &::placeholder {
    color: #00000099;
  }

  &:disabled {
    background-color: #00000019;
    color: #00000099;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  font-size: 14px;
  color: #ff0000;
`;
