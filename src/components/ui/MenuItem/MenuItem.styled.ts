import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
  padding: 10px 0;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;
  margin: 0 20px 0 0;
`;
