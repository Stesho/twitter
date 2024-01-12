import styled from 'styled-components';

export const ImageEditorWrapper = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Input = styled.input`
  display: none;
`;
