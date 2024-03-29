import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  margin: 0 0 10px 0;
  padding: 10px 0;
  cursor: pointer;
  color: ${(props) => props.theme.textDark500};
  &:hover {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    margin: 0 0 5px 0;
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

export const ItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin: 0 20px 0 0;

  @media (max-width: 768px) {
    margin: 0 10px 0 0;
  }
`;
