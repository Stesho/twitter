import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import TwitterLogoSrc from '@/assets/images/twitter_logo.png';
import { Input } from '@/components/ui/Input/Input';
import { NavigateLink } from '@/components/ui/NavigateLink/NavigateLink';
import { ROUTES } from '@/constants/routes';
import { loginFormSchema } from '@/constants/validationSchemas';
import { login } from '@/services/user/login';
import { LoginFormData } from '@/types/forms';

import {
  ErrorMessage,
  Form,
  Inputs,
  LoginButton,
  Signup,
  Title,
  TwitterLogo,
} from './LoginForm.styled';

export const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });
  const [isError, setIsError] = useState(false);

  const onSubmitForm = async (data: LoginFormData) => {
    const { identifier, password } = data;

    const userData = await login({
      identifier,
      password,
    });

    if (!userData) {
      return setIsError(true);
    }

    return navigate('/profile');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <TwitterLogo src={TwitterLogoSrc} alt='twitter logo' />
      <Title>Log in to Twitter</Title>
      {isError && (
        <ErrorMessage data-cy='invalidCredentialError'>
          Invalid email or password
        </ErrorMessage>
      )}
      <Inputs>
        <Input
          dataCy='email'
          placeholder='Phone number, email address'
          label='identifier'
          register={register}
          errorMessage={errors.identifier?.message}
        />
        <Input
          dataCy='password'
          type='password'
          placeholder='Password'
          label='password'
          register={register}
          errorMessage={errors.password?.message}
        />
      </Inputs>
      <LoginButton type='submit' data-cy='loginButton'>
        Log In
      </LoginButton>
      <Signup>
        <NavigateLink to={ROUTES.signup.path}>Sign up to Twitter</NavigateLink>
      </Signup>
    </Form>
  );
};
