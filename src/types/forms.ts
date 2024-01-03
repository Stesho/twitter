import * as yup from 'yup';
import {
  loginFormSchema,
  signupPasswordFormSchema,
  signupUserFormSchema,
} from '@/constants/validationSchemas';

export type SignupUserFormData = yup.InferType<typeof signupUserFormSchema>;

export type SignupPasswordFormData = yup.InferType<
  typeof signupPasswordFormSchema
>;

export type LoginFormData = yup.InferType<typeof loginFormSchema>;

export type EditUserFormData = yup.InferType<typeof signupUserFormSchema>;
