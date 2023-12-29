import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/ui/Input/Input';
import {
  BackButton,
  Buttons,
  ErrorMessage,
  Form,
  FormButton,
  Inputs,
} from './SignupPasswordForm.styled';
import { signupPasswordFormSchema } from '@/constants/validationSchemas';
import { SignupPasswordFormData } from '@/types/forms';

interface SignupPasswordFormProps {
  onSubmit: (password: string) => void;
  onBackClick: () => void;
}

const SignupPasswordForm = ({
  onSubmit,
  onBackClick,
}: SignupPasswordFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupPasswordFormSchema),
  });
  const [isError, setIsError] = useState(false);

  const onSubmitForm = (data: SignupPasswordFormData) => {
    const { password, confirmedPassword } = data;

    if (password === confirmedPassword) {
      onSubmit(password);
    } else {
      setIsError(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      {isError && <ErrorMessage>Passwords must be a match</ErrorMessage>}
      <Inputs>
        <Input
          type='password'
          placeholder='Password'
          label='password'
          register={register}
          errorMessage={errors.password?.message}
        />
        <Input
          type='password'
          placeholder='Confirm password'
          label='confirmedPassword'
          register={register}
          errorMessage={errors.confirmedPassword?.message}
        />
      </Inputs>
      <Buttons>
        <BackButton onClick={onBackClick}>Back</BackButton>
        <FormButton type='submit'>Sign up</FormButton>
      </Buttons>
    </Form>
  );
};

export default SignupPasswordForm;
