import styled from "styled-components";
import { PrimaryButton } from "@/components/ui/Button/Button.styled";

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 670px;
  width: 100%;
  font-family: Roboto, sans-serif;
  font-size: 16px;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  top: 115px;
  left: 0;
  color: #ff0000;
  font-size: 20px;
`;

export const Inputs = styled.div`
  & input {
    margin: 0 0 25px 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
`;

export const FormButton = styled(PrimaryButton)`
  font-family:
    Roboto Serif,
    sans-serif;
  font-weight: 700;
`;

export const BackButton = styled(FormButton)`
  margin: 0 20px 0 0;
`;
