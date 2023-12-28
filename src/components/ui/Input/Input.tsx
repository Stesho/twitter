import React from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { InputWrapper } from '@/components/ui/Input/Input.styled';
import { SignupUserFormSchema } from '@/components/SignupUserForm/SignupUserForm';

interface InputProps {
  placeholder?: string;
  label: Path<SignupUserFormSchema>;
  register: UseFormRegister<SignupUserFormSchema>;
}

export const Input = ({ placeholder, label, register }: InputProps) => (
  <InputWrapper placeholder={placeholder} {...register(label)} />
);
