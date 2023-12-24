import React, { MouseEvent } from "react";
import {
  NeutralButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/ui/Button/Button.styled";
import { ButtonTypes } from "@/types/buttonTypes";

interface ButtonProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
  type?: ButtonTypes;
}

interface CommonButtonProps
  extends Omit<ButtonProps, "children" | "type" | "onClick"> {
  type: "button" | "submit" | "reset" | undefined;
  onClick: (event: MouseEvent) => void;
}

export const Button = ({
  children,
  onClick,
  disabled = false,
  type = ButtonTypes.Primary,
}: ButtonProps) => {
  const buttonProps: CommonButtonProps = {
    type: "button",
    disabled,
    onClick: (event: MouseEvent) => {
      event.preventDefault();
      onClick();
    },
  };

  if (type === ButtonTypes.Primary)
    return <PrimaryButton {...buttonProps}>{children}</PrimaryButton>;

  if (type === ButtonTypes.Secondary)
    return <SecondaryButton {...buttonProps}>{children}</SecondaryButton>;

  if (type === ButtonTypes.Neutral)
    return <NeutralButton {...buttonProps}>{children}</NeutralButton>;

  return <PrimaryButton {...buttonProps}>{children}</PrimaryButton>;
};
