import styled from 'styled-components';

export const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  width: 40px;
  height: 30px;
`;

export const BurgerLine = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.textDark500};
  transition: all 0.2s linear;
`;
