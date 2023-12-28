import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/Input/Input';
import {
  ErrorMessage,
  Form,
  Inputs,
  LoginButton,
  Signup,
  Title,
  TwitterLogo,
} from './LoginForm.styled';
import TwitterLogoSrc from '@/assets/images/twitter_logo.png';
import { login } from '@/services/user/login';
import { setUser } from '@/store/slices/userSlice';
import { loginFormSchema } from '@/constants/validationSchemas';
import { LoginFormData } from '@/types/forms';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmitForm = async (data: LoginFormData) => {
    const { identifier, password } = data;

    const userData = await login({
      identifier,
      password,
    });

    if (!userData) {
      return setIsError(true);
    }

    dispatch(setUser(userData));
    return navigate('/profile');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <TwitterLogo src={TwitterLogoSrc} alt='twitter logo' />
      <Title>Log in to Twitter</Title>
      {isError && <ErrorMessage>Invalid email or password</ErrorMessage>}
      <Inputs>
        <Input
          placeholder='Phone number, email address'
          label='identifier'
          register={register}
          errorMessage={errors.identifier?.message}
        />
        <Input
          placeholder='Password'
          label='password'
          register={register}
          errorMessage={errors.password?.message}
        />
      </Inputs>
      <LoginButton type='submit'>Log In</LoginButton>
      <Signup>Sign up to Twitter</Signup>
    </Form>
  );
};
