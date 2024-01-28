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
  background-color: #0000007f;
`;

export const Content = styled.div`
  max-width: fit-content;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 45px;
  background-color: ${(props) => props.theme.bgPrimary};
  border: 1px solid ${(props) => props.theme.border100};
  border-radius: 8px;

  @media (max-width: 425px) {
    padding: 15px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.textDark500};
  font-size: 35px;
  top: 7px;
  left: calc(100% - 30px - 7px);
  cursor: pointer;
`;
