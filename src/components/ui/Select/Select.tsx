import React from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import {
  ArrowIcon,
  ErrorMessage,
  SelectButton,
  SelectWrapper,
} from '@/components/ui/Select/Select.styled';

interface SelectProps<T extends FieldValues> {
  options: string[];
  caption: string;
  label: Path<T>;
  register: UseFormRegister<T>;
  errorMessage?: string;
}

export const Select = <T extends FieldValues>({
  options,
  caption,
  label,
  register,
  errorMessage,
}: SelectProps<T>) => (
  <SelectWrapper>
    <ArrowIcon />
    <SelectButton $isError={errorMessage !== undefined} {...register(label)}>
      {caption && (
        <option value='' disabled selected hidden>
          {caption}
        </option>
      )}
      {options.map((option) => (
        <option key={option?.toString()} value={option}>
          {option?.toString()}
        </option>
      ))}
    </SelectButton>
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </SelectWrapper>
);
