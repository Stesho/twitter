import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: 450px;
  height: 60px;
  border-radius: 76px;
  background-color: #1da1f2;
  color: #fff;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 700;
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
