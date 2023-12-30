import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { isUserExist } from '@/services/user/isUserExist';
import { SignupUserData } from '@/types/user';
import { signup } from '@/services/user/signup';
import { setUser } from '@/store/slices/userSlice';

export const SignupSteps = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<SignupUserData>(null!);
  const [step, setStep] = useState(0);
  const [isError, setIsError] = useState<boolean>(false);

  const onNextClick = async (user: SignupUserData) => {
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
    const newUser = await signup(userData, password);

    if (!newUser) {
      return setIsError(true);
    }

    dispatch(setUser(newUser));
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
