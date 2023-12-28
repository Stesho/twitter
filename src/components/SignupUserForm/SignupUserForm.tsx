import React, { useState } from 'react';
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

export interface SignupUserFormSchema {
  name: string;
  phoneNumber: string;
  email: string;
}

const schema = yup
  .object({
    name: yup.string().min(2).max(50).required(),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, 'Invalid phone number')
      .required(),
    email: yup.string().email().required(),
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
  // const [name, setName] = useState<string>("");
  // const [phoneNumber, setPhoneNumber] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  const [month, setMonth] = useState<string | null>(null);
  const [day, setDay] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);

  const onSubmitForm = ({ name, phoneNumber, email }: FormData) => {
    console.log(name, phoneNumber, email);
    console.log(year, month, day);
    console.log(errors);
    if (year && month && day) {
      onSubmit({
        name,
        phoneNumber,
        email,
        birthday: getDate(year, month, day).toISOString(),
      });
    }
  };

  const onSelectYear = (newYear: number) => {
    setYear(newYear);
  };

  const onSelectMonth = (newMonth: string) => {
    setMonth(newMonth);
  };

  const onSelectDay = (newDay: number) => {
    setDay(newDay);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <Inputs>
        <Input placeholder='Name' label='name' register={register} />
        {errors.name?.message}
        <Input
          placeholder='Phone number'
          label='phoneNumber'
          register={register}
        />
        {errors.phoneNumber?.message}
        <Input placeholder='Email' label='email' register={register} />
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
        <Select options={MONTHS} caption='Month' onChange={onSelectMonth} />
        <Select
          options={[1, 2, 3, 4, 5, 6, 7]}
          caption='Day'
          onChange={onSelectDay}
        />
        <Select
          options={[1999, 2000, 2001, 2002, 2003]}
          caption='Year'
          onChange={onSelectYear}
        />
      </Selects>
      <SubmitButton type='submit'>Next</SubmitButton>
    </Form>
  );
};
