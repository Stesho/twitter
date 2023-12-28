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
  styleType?: ButtonTypes;
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
  styleType = ButtonTypes.Primary,
}: ButtonProps) => {
  const buttonProps: CommonButtonProps = {
    type: "button",
    disabled,
    onClick: (event: MouseEvent) => {
      event.preventDefault();
      onClick();
    },
  };

  if (styleType === ButtonTypes.Primary)
    return <PrimaryButton {...buttonProps}>{children}</PrimaryButton>;

  if (styleType === ButtonTypes.Secondary)
    return <SecondaryButton {...buttonProps}>{children}</SecondaryButton>;

  if (styleType === ButtonTypes.Neutral)
    return <NeutralButton {...buttonProps}>{children}</NeutralButton>;

  return <PrimaryButton {...buttonProps}>{children}</PrimaryButton>;
};
