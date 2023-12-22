import React from "react";
import { ButtonWrapper } from "@/components/ui/Button/Button.styled";
import { ButtonTypes } from "@/types/buttonTypes";

interface ButtonProps {
  children: string;
  disabled?: boolean;
  type?: ButtonTypes;
}

export const Button = ({
  children,
  disabled = false,
  type = ButtonTypes.Primary,
}: ButtonProps) => (
    <ButtonWrapper $type={type} type="button" disabled={disabled}>
      {children}
    </ButtonWrapper>
  )
