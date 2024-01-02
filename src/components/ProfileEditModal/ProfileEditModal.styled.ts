import styled from 'styled-components';
import { PrimaryButton } from '@/components/ui/Button/Button.styled';

export const Form = styled.form`
  width: 670px;
  & > div {
    margin: 0 0 25px 0;
  }
`;

export const Selects = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 38px 0;

  & div:first-child {
    max-width: 312px;
  }
  & div:not(:first-child) {
    max-width: 159px;
  }
`;

export const Buttons = styled.div`
  display: flex;
`;

export const SaveButton = styled(PrimaryButton)`
  margin: 0 0 0 20px;
`;
