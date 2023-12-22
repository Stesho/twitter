import React from "react";
import { ButtonWrapper } from "@/components/ui/Button/Button.styled";

interface ButtonProps {
  children: string;
  disabled?: boolean;
}

function Button({ children, disabled = false }: ButtonProps) {
  return <ButtonWrapper disabled={disabled}>{children}</ButtonWrapper>;
}

export default Button;
