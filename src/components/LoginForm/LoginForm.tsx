import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/ui/Input/Input";
import {
  ErrorMessage,
  Form,
  Inputs,
  Signup,
  Title,
  TwitterLogo,
} from "./LoginForm.styled";
import { Button } from "@/components/ui/Button/Button";
import TwitterLogoSrc from "@/assets/images/twitter_logo.png";
import { login } from "@/services/user/login";
import { setUser } from "@/store/slices/userSlice";
import { RootState } from "@/store/store";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const userStore = useSelector((state: RootState) => state.user);
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
    const userData = await login({
      emailOrPhoneNumber,
      password,
    });

    if (!userData) {
      return setIsError(true);
    }

    return dispatch(setUser(userData));
  };

  return (
    <Form>
      <TwitterLogo src={TwitterLogoSrc} alt="twitter logo" />
      <Title>Log in to Twitter</Title>
      {isError && <ErrorMessage>Invalid email or password</ErrorMessage>}
      <Inputs>
        <Input
          placeholder="Phone number, email address"
          onChange={onEmailOrPhoneNumber}
        />
        <Input placeholder="Password" onChange={onSetPassword} />
      </Inputs>
      <Button onClick={onSubmit}>Log In</Button>
      <Signup onClick={() => console.log(userStore)}>Sign up to Twitter</Signup>
    </Form>
  );
};
