import styled from 'styled-components';

export const ImageEditorWrapper = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: rgb(222, 222, 222);
  border-radius: 5px;
  opacity: 0.85;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const Input = styled.input`
  display: none;
`;
