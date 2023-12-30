import * as yup from 'yup';
import {
  loginFormSchema,
  signupPasswordFormSchema,
  signupUserFormSchema,
} from '@/db/validationSchemas';

export type SignupUserFormData = yup.InferType<typeof signupUserFormSchema>;

export type SignupPasswordFormData = yup.InferType<
  typeof signupPasswordFormSchema
>;

export type LoginFormData = yup.InferType<typeof loginFormSchema>;
