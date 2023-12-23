import React from "react";
import {
  NeutralButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/ui/Button/Button.styled";
import { ButtonTypes } from "@/types/buttonTypes";

interface CommonButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  disabled: boolean;
}

interface ButtonProps {
  children: string;
  disabled?: boolean;
  type?: ButtonTypes;
}

export const Button = ({
  children,
  disabled = false,
  type = ButtonTypes.Primary,
}: ButtonProps) => {
  const buttonProps: CommonButtonProps = {
    type: "button",
    disabled,
  };

  if (type === ButtonTypes.Primary)
    return <PrimaryButton {...buttonProps}>{children}</PrimaryButton>;

  if (type === ButtonTypes.Secondary)
    return <SecondaryButton {...buttonProps}>{children}</SecondaryButton>;

  if (type === ButtonTypes.Neutral)
    return <NeutralButton {...buttonProps}>{children}</NeutralButton>;

  return <PrimaryButton {...buttonProps}>{children}</PrimaryButton>;
};
