import React, { FormEvent, useState } from "react";
import { Input } from "@/components/ui/Input/Input";
import {
  BackButton,
  Buttons,
  ErrorMessage,
  Form,
  FormButton,
  Inputs,
} from "./SignupPasswordForm.styled";

interface SignupPasswordFormProps {
  onSubmit: () => void;
}

const SignupPasswordForm = ({ onSubmit }: SignupPasswordFormProps) => {
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const onClickSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onSignupClick = () => {
    if (password !== confirmedPassword) {
      setIsError(true);
    }
  };

  const onBackClick = () => {
    onSubmit();
  };

  return (
    <Form onSubmit={onClickSubmit}>
      {isError && (
        <ErrorMessage>User with passed email already exist</ErrorMessage>
      )}
      <Inputs>
        <Input placeholder="Password" onChange={setPassword} />
        <Input placeholder="Confirm password" onChange={setConfirmedPassword} />
      </Inputs>
      <Buttons>
        <BackButton onClick={onBackClick}>Back</BackButton>
        <FormButton onClick={onSignupClick}>Sign up</FormButton>
      </Buttons>
    </Form>
  );
};

export default SignupPasswordForm;
