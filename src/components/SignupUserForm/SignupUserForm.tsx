import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/ui/Input/Input';
import { Select } from '@/components/ui/Select/Select';
import { MONTHS } from '@/constants/selectOptions';
import {
  Form,
  Inputs,
  Selects,
  SubmitButton,
  SubTitle,
  Text,
  UseEmail,
} from './SignupUserForm.styled';
import { getDate } from '@/utils/getDate';
import { SignupUserData } from '@/types/user';
import { signupUserFormSchema } from '@/constants/validationSchemas';
import { SignupUserFormData } from '@/types/forms';
import { getDaysInMonth } from '@/utils/getDaysInMonth';
import { getYearsInRange } from '@/utils/getYearsInRange';
import { getCurrentYear } from '@/utils/getCurrentYear';

interface SignupUserFormProps {
  onSubmit: (user: SignupUserData) => void;
}

export const SignupUserForm = ({ onSubmit }: SignupUserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(signupUserFormSchema),
  });

  const onSubmitForm = (data: SignupUserFormData) => {
    const { name, phoneNumber, email, year, month, day } = data;

    onSubmit({
      name,
      phoneNumber,
      email,
      birthday: getDate(year, month, day).toISOString(),
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <Inputs>
        <Input
          placeholder='Name'
          label='name'
          register={register}
          errorMessage={errors.name?.message}
        />
        <Input
          placeholder='Phone number'
          label='phoneNumber'
          register={register}
          errorMessage={errors.phoneNumber?.message}
        />
        <Input
          placeholder='Email'
          label='email'
          register={register}
          errorMessage={errors.email?.message}
        />
      </Inputs>
      <UseEmail>Use email</UseEmail>
      <SubTitle>Date of birth</SubTitle>
      <Text>
        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
        Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
        nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
        dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue
      </Text>
      <Selects>
        <Select
          options={MONTHS}
          caption='Month'
          label='month'
          register={register}
          errorMessage={errors.month?.message}
        />
        <Select
          options={getDaysInMonth(
            +watch('year') || 2000,
            MONTHS.indexOf(watch('month')) + 1,
          )}
          caption='Day'
          label='day'
          register={register}
          errorMessage={errors.day?.message}
        />
        <Select
          options={getYearsInRange(getCurrentYear() - 100, getCurrentYear())}
          caption='Year'
          label='year'
          register={register}
          errorMessage={errors.year?.message}
        />
      </Selects>
      <SubmitButton type='submit'>Next</SubmitButton>
    </Form>
  );
};
