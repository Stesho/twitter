import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
import { phoneRegExp } from '@/constants/regExp';

interface SignupUserFormProps {
  onSubmit: (user: SignupUserData) => void;
}

interface SignupUserFormSchema {
  name: string;
  phoneNumber: string;
  email: string;
  year: string;
  month: string;
  day: string;
}

const schema = yup
  .object({
    name: yup.string().min(2).max(50).required(),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, 'Invalid phone number')
      .required(),
    email: yup.string().email().required(),
    year: yup.string().required(),
    month: yup.string().required(),
    day: yup.string().required(),
  })
  .required();
export type FormData = yup.InferType<typeof schema>;

export const SignupUserForm = ({ onSubmit }: SignupUserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupUserFormSchema>({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data: FormData) => {
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
          validation={{
            label: 'name',
            register,
          }}
        />
        {errors.name?.message}
        <Input
          placeholder='Phone number'
          validation={{
            label: 'phoneNumber',
            register,
          }}
        />
        {errors.phoneNumber?.message}
        <Input
          placeholder='Email'
          validation={{
            label: 'email',
            register,
          }}
        />
        {errors.email?.message}
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
          validation={{
            label: 'month',
            register,
          }}
        />
        {errors.month?.message}
        <Select
          options={['1', '2', '3', '4', '5', '6', '7']}
          caption='Day'
          validation={{
            label: 'day',
            register,
          }}
        />
        {errors.day?.message}
        <Select
          options={['1999', '2000', '2001', '2002', '2003']}
          caption='Year'
          validation={{
            label: 'year',
            register,
          }}
        />
        {errors.year?.message}
      </Selects>
      <SubmitButton type='submit'>Next</SubmitButton>
    </Form>
  );
};
