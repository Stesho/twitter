import React, { useState } from "react";
import TwitterLogoSrc from "@/assets/images/twitter_logo.png";
import { SignupUserForm } from "@/components/SignupUserForm/SignupUserForm";
import SignupPasswordForm from "@/components/SignupPasswordForm/SignupPasswordForm";
import { StepsWrapper, Title, TwitterLogo } from "./SignupSteps.styled";

export const SignupSteps = () => {
  const [step, setStep] = useState(0);

  const onNextClick = () => {
    setStep((prev) => prev + 1);
  };

  const onBackClick = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <StepsWrapper>
      <TwitterLogo src={TwitterLogoSrc} alt="twitter logo" />
      <Title>Create an account</Title>
      {step === 0 ? (
        <SignupUserForm onSubmit={onNextClick} />
      ) : (
        <SignupPasswordForm onSubmit={onBackClick} />
      )}
    </StepsWrapper>
  );
};
