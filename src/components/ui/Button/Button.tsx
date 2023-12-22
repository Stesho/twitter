import React from "react";
import { ButtonWrapper } from "@/components/ui/Button/Button.styled";
import { ButtonTypes } from "@/types/buttonTypes";

interface ButtonProps {
  children: string;
  disabled?: boolean;
  type?: ButtonTypes;
}

function Button({
  children,
  disabled = false,
  type = ButtonTypes.Primary,
}: ButtonProps) {
  return (
    <ButtonWrapper $type={type} type="button" disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
}

export default Button;
