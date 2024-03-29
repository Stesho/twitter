import { lighten } from 'polished';
import styled from 'styled-components';

import { adaptiveFont } from '@/utils/adaptiveFont';

export const ButtonWrapper = styled.button`
  width: 100%;
  padding: 19px 0;
  background-color: ${(props) => props.theme.bgSecondaryLight100};
  border-radius: 76px;
  color: ${(props) => props.theme.textLight};
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: ${adaptiveFont(18, 14)};
  font-weight: 700;
  transition: all 200ms;
  cursor: pointer;

  &:not(:disabled):hover {
    box-shadow: 0 0 8px ${(props) => props.theme.bgSecondaryLight100};
    background-color: ${(props) =>
      lighten(0.1, props.theme.bgSecondaryLight100)};
  }

  &:disabled {
    background-color: ${(props) => props.theme.bgSecondaryLight200};
    box-shadow: 0 10px 20px 0 ${(props) => props.theme.shadow};
  }

  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

export const PrimaryButton = styled(ButtonWrapper)`
  background-color: ${(props) => props.theme.bgSecondaryLight100};
`;

export const SecondaryButton = styled(ButtonWrapper)`
  background-color: ${(props) => props.theme.bgSecondaryDark400};
  color: ${(props) => props.theme.bgPrimary};
`;

export const NeutralButton = styled(ButtonWrapper)`
  background-color: ${(props) => props.theme.bgPrimary};
  border: 1px solid ${(props) => props.theme.border400};
  color: ${(props) => props.theme.textDark500};
`;
