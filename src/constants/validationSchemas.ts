import * as yup from 'yup';

import { ERROR_MESSAGES } from '@/constants/errorMessages';
import { passwordRegExp, phoneRegExp } from '@/constants/regExp';

export const signupUserFormSchema = yup
  .object({
    avatar: yup.string(),
    name: yup
      .string()
      .required(ERROR_MESSAGES.required('Name'))
      .min(2, ERROR_MESSAGES.min('Name', 2))
      .max(50, ERROR_MESSAGES.max('Name', 50)),
    phoneNumber: yup
      .string()
      .required(ERROR_MESSAGES.required('Phone number'))
      .max(17, ERROR_MESSAGES.max('Phone number', 17))
      .matches(phoneRegExp, ERROR_MESSAGES.phoneNumber),
    email: yup
      .string()
      .email(ERROR_MESSAGES.email)
      .required(ERROR_MESSAGES.required('Email')),
    year: yup.string().required(ERROR_MESSAGES.required('Year')),
    month: yup.string().required(ERROR_MESSAGES.required('Month')),
    day: yup.string().required(ERROR_MESSAGES.required('Day')),
  })
  .required();

export const signupPasswordFormSchema = yup.object({
  password: yup
    .string()
    .required(ERROR_MESSAGES.required('Password'))
    .min(6, ERROR_MESSAGES.min('Password', 6))
    .max(16, ERROR_MESSAGES.max('Password', 16))
    .matches(passwordRegExp, ERROR_MESSAGES.password),
  confirmedPassword: yup
    .string()
    .required(ERROR_MESSAGES.required('Confirmed password'))
    .min(6, ERROR_MESSAGES.min('Password', 6))
    .max(16, ERROR_MESSAGES.max('Password', 16))
    .matches(passwordRegExp, ERROR_MESSAGES.password),
});

export const loginFormSchema = yup.object({
  identifier: yup
    .string()
    .required(ERROR_MESSAGES.required('Phone number or email')),
  password: yup
    .string()
    .required(ERROR_MESSAGES.required('Password'))
    .min(6, ERROR_MESSAGES.min('Password', 6))
    .max(16, ERROR_MESSAGES.max('Password', 16))
    .matches(passwordRegExp, ERROR_MESSAGES.password),
});
