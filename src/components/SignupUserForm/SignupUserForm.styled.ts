import styled from 'styled-components';
import { PrimaryButton } from '@/components/ui/Button/Button.styled';
import { adaptiveFont } from '@/utils/adaptiveFont';

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

  @media (max-width: 768px) {
    & div {
      margin: 0 0 17px 0;
    }
  }
`;

export const UseEmail = styled.span`
  margin: 0 0 17px 0;
  color: ${(props) => props.theme.bgSecondaryLight100};
  font-family: Roboto, sans-serif;
  font-size: ${adaptiveFont(18, 14)};
`;

export const SubTitle = styled.h3`
  margin: 0 0 32px 0;
  font-family:
    Roboto Serif,
    sans-serif;
  font-size: ${adaptiveFont(18, 14)};
  font-weight: 700;

  @media (max-width: 768px) {
    margin: 0 0 14px 0;
  }
`;

export const Text = styled.h3`
  margin: 0 0 32px 0;
  font-family: Roboto, sans-serif;
  font-size: ${adaptiveFont(16, 12)};
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

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 0 15px 0;

    & div {
      margin: 0 0 17px 0;
    }
    & div:first-child {
      max-width: 100%;
    }
    & div:not(:first-child) {
      max-width: 100%;
    }
  }
`;

export const SubmitButton = styled(PrimaryButton)`
  font-family:
    Roboto Serif,
    sans-serif;
  font-weight: 700;
`;
