import React, { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister, Path, FieldValues } from 'react-hook-form';
import {
  ErrorMessage,
  InputStyled,
  InputWrapper,
} from '@/components/ui/Input/Input.styled';

interface InputProps<T extends FieldValues> {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label: Path<T>;
  register: UseFormRegister<T>;
  errorMessage?: string;
}

export const Input = <T extends FieldValues>({
  type = 'text',
  placeholder,
  label,
  register,
  errorMessage,
}: InputProps<T>) => (
  <InputWrapper>
    <InputStyled
      $isError={errorMessage !== undefined}
      type={type}
      placeholder={placeholder}
      {...register(label)}
    />
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </InputWrapper>
);
