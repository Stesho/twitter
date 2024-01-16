import React from 'react';

import { BurgerButton, BurgerLine } from '@/components/ui/Burger/Burger.styled';

interface BurgerProps {
  onClick: () => void;
}

export const Burger = ({ onClick }: BurgerProps) => (
  <BurgerButton onClick={onClick}>
    <BurgerLine />
    <BurgerLine />
    <BurgerLine />
  </BurgerButton>
);
