import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: 100%;
  padding: 19px 0;
  background-color: #1da1f2;
  border-radius: 76px;
  color: #fff;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 700;
  transition: all 200ms;
  cursor: pointer;

  &:not(:disabled):hover {
    box-shadow: 0 0 5px #01a0ff;
    background-color: #4fbfff;
  }

  &:disabled {
    background-color: rgba(29, 161, 242, 0.3);
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.08);
  }
`;

export const PrimaryButton = styled(ButtonWrapper)`
  background-color: #1da1f2;
`;

export const SecondaryButton = styled(ButtonWrapper)`
  background-color: #000;
`;

export const NeutralButton = styled(ButtonWrapper)`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.4);
  color: #000;
`;
