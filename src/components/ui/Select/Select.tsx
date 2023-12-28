import React from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import {
  ArrowIcon,
  SelectButton,
  SelectWrapper,
} from '@/components/ui/Select/Select.styled';

interface SelectValidationProps<T extends FieldValues> {
  label: Path<T>;
  register: UseFormRegister<T>;
}

interface SelectProps<T extends FieldValues> {
  options: string[];
  caption: string;
  validation: SelectValidationProps<T>;
}

export const Select = <T extends FieldValues>({
  options,
  caption,
  validation,
}: SelectProps<T>) => {
  const { label, register } = validation;

  return (
    <SelectWrapper>
      <ArrowIcon />
      <SelectButton {...register(label)}>
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
    </SelectWrapper>
  );
};
