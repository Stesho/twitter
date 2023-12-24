import React, { ChangeEvent } from "react";
import { InputWrapper } from "@/components/ui/Input/Input.styled";

interface InputProps {
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Input = ({ onChange, placeholder }: InputProps) => {
  const onInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return <InputWrapper onChange={onInputValue} placeholder={placeholder} />;
};
