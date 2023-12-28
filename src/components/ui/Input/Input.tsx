import React from 'react';
import { UseFormRegister, Path, FieldValues } from 'react-hook-form';
import { InputWrapper } from '@/components/ui/Input/Input.styled';

interface InputValidationProps<T extends FieldValues> {
  label: Path<T>;
  register: UseFormRegister<T>;
}

interface InputProps<T extends FieldValues> {
  placeholder?: string;
  validation: InputValidationProps<T>;
}

export const Input = <T extends FieldValues>({
  placeholder,
  validation,
}: InputProps<T>) => {
  const { label, register } = validation;

  return <InputWrapper placeholder={placeholder} {...register(label)} />;
};
