import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  onSubmit: (password: string) => void;
  onBackClick: () => void;
}

const SignupPasswordForm = ({
  onSubmit,
  onBackClick,
}: SignupPasswordFormProps) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const onClickSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onSignupClick = () => {
    if (password !== confirmedPassword) {
      return setIsError(true);
    }

    onSubmit(password);
    return navigate("/profile");
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
