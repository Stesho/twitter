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
import { getDateValuesFromISOString } from '@/utils/getDateValuesFromISOString';
import { NavigateLink } from '@/components/ui/NavigateLink/NavigateLink';
import { ROUTES } from '@/constants/routes';

interface SignupUserFormProps {
  onSubmit: (user: SignupUserData) => void;
  initialUserData?: SignupUserData;
}

export const SignupUserForm = ({
  onSubmit,
  initialUserData,
}: SignupUserFormProps) => {
  const initialBirthday = getDateValuesFromISOString(
    initialUserData?.birthday || '',
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(signupUserFormSchema),
    defaultValues: {
      name: initialUserData?.name || '',
      phoneNumber: initialUserData?.phoneNumber || '',
      email: initialUserData?.email || '',
      year: initialBirthday.year ? initialBirthday.year.toString() : '',
      month: initialBirthday.month || '',
      day: initialBirthday.day ? initialBirthday.day.toString() : '',
    },
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
          dataCy='name'
          placeholder='Name'
          label='name'
          register={register}
          errorMessage={errors.name?.message}
        />
        <Input
          dataCy='phone'
          placeholder='Phone number'
          label='phoneNumber'
          register={register}
          errorMessage={errors.phoneNumber?.message}
        />
        <Input
          dataCy='email'
          placeholder='Email'
          label='email'
          register={register}
          errorMessage={errors.email?.message}
        />
      </Inputs>
      <UseEmail>
        <NavigateLink to={ROUTES.signup.path}>Use email</NavigateLink>
      </UseEmail>
      <SubTitle>Date of birth</SubTitle>
      <Text>
        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
        Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
        nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
        dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue
      </Text>
      <Selects>
        <Select
          dataCy='month'
          options={MONTHS}
          caption='Month'
          label='month'
          register={register}
          errorMessage={errors.month?.message}
        />
        <Select
          dataCy='day'
          options={getDaysInMonth(
            +watch('year') || 2000,
            MONTHS.indexOf(watch('month')) + 1,
          ).reverse()}
          caption='Day'
          label='day'
          register={register}
          errorMessage={errors.day?.message}
        />
        <Select
          dataCy='year'
          options={getYearsInRange(
            getCurrentYear() - 100,
            getCurrentYear(),
          ).reverse()}
          caption='Year'
          label='year'
          register={register}
          errorMessage={errors.year?.message}
        />
      </Selects>
      <SubmitButton type='submit' data-cy='next'>
        Next
      </SubmitButton>
    </Form>
  );
};
