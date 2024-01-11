import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 909px;
  padding: 25px 34px;
  margin: 0 auto;
  border-bottom: 1px solid ${(props) => props.theme.border100};
`;

export const CrossButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.textDark500};
  font-size: 35px;
  top: 30px;
  left: calc(100% - 50px);
  cursor: pointer;
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MenuWrapper = styled.div`
  position: absolute;
  max-width: 320px;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${(props) => props.theme.bgPrimary};
  animation: ${slide} 300ms linear;
`;
