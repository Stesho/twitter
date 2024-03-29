import styled from 'styled-components';

import { adaptiveFont } from '@/utils/adaptiveFont';

export const Text = styled.p`
  font-weight: 600;
  font-size: ${adaptiveFont(28, 16)};
  text-align: center;
  color: ${(props) => props.theme.textDark500};
`;

export const Buttons = styled.div`
  display: flex;
  margin: 40px 0 0 0;

  & > button:first-child {
    margin: 0 30px 0 0;
  }
`;
