import React, { useState } from "react";
import { Input } from "@/components/ui/Input/Input";
import {
  ErrorMessage,
  Form,
  TwitterLogo,
} from "@/components/ui/LoginForm/LoginForm.styled";
import { Button } from "@/components/ui/Button/Button";
import TwitterLogoSrc from "@/assets/images/twitter_logo.png";
import { login } from "@/services/user/login";

export const LoginForm = () => {
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const onEmailOrPhoneNumber = (newEmail: string) => {
    setEmailOrPhoneNumber(newEmail);
  };

  const onSetPassword = (newPhoneNumber: string) => {
    setPassword(newPhoneNumber);
  };

  const onSubmit = async () => {
    const data = await login({
      emailOrPhoneNumber,
      password,
    });
    if (!data) {
      setIsError(true);
    }
  };

  return (
    <Form>
      <TwitterLogo src={TwitterLogoSrc} alt="twitter logo" />
      <h2>Log in to Twitter</h2>
      {isError && <ErrorMessage>Invalid email or password</ErrorMessage>}
      <Input
        placeholder="Phone number, email address"
        onChange={onEmailOrPhoneNumber}
      />
      <Input placeholder="Password" onChange={onSetPassword} />
      <Button onClick={onSubmit}>Log In</Button>
    </Form>
  );
};
