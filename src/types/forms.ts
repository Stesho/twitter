import * as yup from 'yup';
import {
  signupPasswordFormSchema,
  signupUserFormSchema,
} from '@/constants/validationSchemas';

export type SignupUserFormData = yup.InferType<typeof signupUserFormSchema>;

export type SignupPasswordFormData = yup.InferType<
  typeof signupPasswordFormSchema
>;
