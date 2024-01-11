import styled from 'styled-components';

export const Text = styled.p`
  font-weight: 600;
  font-size: 28px;
`;

export const Buttons = styled.div`
  display: flex;
  margin: 40px 0 0 0;

  & > button:first-child {
    margin: 0 30px 0 0;
  }
`;
