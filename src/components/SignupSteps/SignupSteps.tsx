import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TwitterLogoSrc from '@/assets/images/twitter_logo.png';
import { SignupUserForm } from '@/components/SignupUserForm/SignupUserForm';
import SignupPasswordForm from '@/components/SignupPasswordForm/SignupPasswordForm';
import {
  ErrorMessage,
  StepsWrapper,
  Title,
  TwitterLogo,
} from './SignupSteps.styled';
import { getUserByEmailOrPhone } from '@/services/user/getUserByEmailOrPhone';
import { SignupUserData } from '@/types/user';
import { signup } from '@/services/user/signup';

export const SignupSteps = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<SignupUserData>(null!);
  const [step, setStep] = useState(0);
  const [isError, setIsError] = useState(false);

  const onNextClick = async (user: SignupUserData) => {
    const isUser = await getUserByEmailOrPhone(user.email, user.phoneNumber);

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
    const newUser = await signup(userData, password);

    if (!newUser) {
      return setIsError(true);
    }

    return navigate('/profile');
  };

  return (
    <StepsWrapper>
      <TwitterLogo src={TwitterLogoSrc} alt='twitter logo' />
      <Title>Create an account</Title>
      {isError && (
        <ErrorMessage>User with passed email already exist</ErrorMessage>
      )}
      {step === 0 ? (
        <SignupUserForm onSubmit={onNextClick} initialUserData={userData} />
      ) : (
        <SignupPasswordForm onBackClick={onBackClick} onSubmit={onSubmit} />
      )}
    </StepsWrapper>
  );
};
