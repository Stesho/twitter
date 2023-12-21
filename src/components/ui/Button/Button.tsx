import React from 'react';
import { ButtonWrapper } from '@/components/ui/Button/Button.styled';

interface ButtonProps {
  children: string;
}

function Button({ children }: ButtonProps) {
  return <ButtonWrapper>{children}</ButtonWrapper>;
}

export default Button;
