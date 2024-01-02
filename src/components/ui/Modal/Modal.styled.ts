import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 4;
  background-color: rgb(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 45px;
  background-color: #fff;
  border: 1px solid #a0a0a0;
  border-radius: 8px;
`;

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 35px;
  top: 7px;
  left: calc(100% - 30px - 7px);
  cursor: pointer;
`;
