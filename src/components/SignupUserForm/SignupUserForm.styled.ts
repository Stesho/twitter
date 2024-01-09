import styled from 'styled-components';
import { PrimaryButton } from '@/components/ui/Button/Button.styled';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 670px;
  width: 100%;
  font-family: Roboto, sans-serif;
  font-size: 16px;
`;

export const Inputs = styled.div`
  & div {
    margin: 0 0 25px 0;
  }
`;

export const UseEmail = styled.span`
  margin: 0 0 17px 0;
  color: ${(props) => props.theme.bgSecondaryLight100};
  font-family: Roboto, sans-serif;
  font-size: 18px;
`;

export const SubTitle = styled.h3`
  margin: 0 0 32px 0;
  font-family:
    Roboto Serif,
    sans-serif;
  font-size: 18px;
  font-weight: 700;
`;

export const Text = styled.h3`
  margin: 0 0 32px 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  opacity: 0.6;
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

export const SubmitButton = styled(PrimaryButton)`
  font-family:
    Roboto Serif,
    sans-serif;
  font-weight: 700;
`;
