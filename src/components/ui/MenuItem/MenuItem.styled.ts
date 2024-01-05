import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  margin: 0 0 10px 0;
  padding: 10px 0;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;

export const ItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  &.active {
    font-family:
      Roboto Serif,
      sans-serif;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;
  margin: 0 20px 0 0;
`;
