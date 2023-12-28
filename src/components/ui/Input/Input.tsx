import React from 'react';
import { UseFormRegister, Path, FieldValues } from 'react-hook-form';
import {
  ErrorMessage,
  InputStyled,
  InputWrapper,
} from '@/components/ui/Input/Input.styled';

interface InputProps<T extends FieldValues> {
  placeholder?: string;
  label: Path<T>;
  register: UseFormRegister<T>;
  errorMessage?: string;
}

export const Input = <T extends FieldValues>({
  placeholder,
  label,
  register,
  errorMessage,
}: InputProps<T>) => (
  <InputWrapper>
    <InputStyled
      $isError={errorMessage !== undefined}
      placeholder={placeholder}
      {...register(label)}
    />
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </InputWrapper>
);
