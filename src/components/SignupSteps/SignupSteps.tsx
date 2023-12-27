import React, { useState } from "react";
import TwitterLogoSrc from "@/assets/images/twitter_logo.png";
import { SignupUserForm } from "@/components/SignupUserForm/SignupUserForm";
import SignupPasswordForm from "@/components/SignupPasswordForm/SignupPasswordForm";
import {
  ErrorMessage,
  StepsWrapper,
  Title,
  TwitterLogo,
} from "./SignupSteps.styled";
import { isUserExist } from "@/services/user/isUserExist";
import { User } from "@/types/user";
import { signup } from "@/services/user/signup";

export const SignupSteps = () => {
  const [userData, setUserData] = useState<User>(null!);
  const [step, setStep] = useState(0);
  const [isError, setIsError] = useState<boolean>(false);

  const onNextClick = async (user: User) => {
    const isUser = await isUserExist(user);

    if (isUser) {
      return setIsError(true);
    }

    setUserData(user);
    setIsError(false);
    return setStep((prev) => prev + 1);
  };

  const onBackClick = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = async (password: string) => {
    const res = await signup(userData, password);

    if (!res) {
      return setIsError(true);
    }

    return console.log(res);
  };

  return (
    <StepsWrapper>
      <TwitterLogo src={TwitterLogoSrc} alt="twitter logo" />
      <Title>Create an account</Title>
      {isError && (
        <ErrorMessage>User with passed email already exist</ErrorMessage>
      )}
      {step === 0 ? (
        <SignupUserForm onSubmit={onNextClick} />
      ) : (
        <SignupPasswordForm onBackClick={onBackClick} onSubmit={onSubmit} />
      )}
    </StepsWrapper>
  );
};
