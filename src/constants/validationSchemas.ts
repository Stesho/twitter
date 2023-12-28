import * as yup from 'yup';
import { phoneRegExp } from '@/constants/regExp';

export const signupUserFormSchema = yup
  .object({
    name: yup.string().min(2).max(50).required(),
    phoneNumber: yup
      .string()
      .required()
      .matches(phoneRegExp, 'Invalid phone number'),
    email: yup.string().email().required(),
    year: yup.string().required(),
    month: yup.string().required(),
    day: yup.string().required(),
  })
  .required();

export const signupPasswordFormSchema = yup.object({
  password: yup.string().required(),
  confirmedPassword: yup.string().required(),
});

export const loginFormSchema = yup.object({
  identifier: yup.string().required(),
  password: yup.string().required(),
});
