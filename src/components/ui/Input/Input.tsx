import React, { HTMLInputTypeAttribute } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import {
  ErrorMessage,
  InputStyled,
  InputWrapper,
} from '@/components/ui/Input/Input.styled';

interface InputProps<T extends FieldValues> {
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
  placeholder?: string;
  label: Path<T>;
  register: UseFormRegister<T>;
  errorMessage?: string;
  dataCy?: string;
}

export const Input = <T extends FieldValues>({
  type = 'text',
  disabled,
  placeholder,
  label,
  register,
  errorMessage,
  dataCy,
}: InputProps<T>) => (
  <InputWrapper>
    <InputStyled
      data-cy={dataCy}
      $isError={errorMessage !== undefined}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      {...register(label)}
    />
    {!!errorMessage && (
      <ErrorMessage data-cy={`${dataCy}Error`}>{errorMessage}</ErrorMessage>
    )}
  </InputWrapper>
);
