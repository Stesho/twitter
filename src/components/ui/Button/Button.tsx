import React, { MouseEvent } from 'react';
import {
  NeutralButton,
  PrimaryButton,
  SecondaryButton,
} from '@/components/ui/Button/Button.styled';
import { ButtonTypes } from '@/types/buttonTypes';

type CommonButtonTypes = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  children: string;
  type?: CommonButtonTypes;
  onClick?: () => void;
  disabled?: boolean;
  styleType?: ButtonTypes;
}

interface CommonButtonProps extends Omit<ButtonProps, 'children' | 'onClick'> {
  onClick: (event: MouseEvent) => void;
}

export const Button = ({
  children,
  type,
  onClick,
  disabled = false,
  styleType = ButtonTypes.Primary,
}: ButtonProps) => {
  const buttonProps: CommonButtonProps = {
    type: type || 'button',
    disabled,
    onClick: (event: MouseEvent) => {
      event.preventDefault();
      onClick?.();
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
