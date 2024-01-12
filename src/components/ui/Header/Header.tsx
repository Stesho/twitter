import React, { ReactNode, useState } from 'react';
import { Menu } from '@/components/ui/Menu/Menu';
import {
  CrossButton,
  HeaderWrapper,
  MenuWrapper,
  Overlay,
} from '@/components/ui/Header/Header.styled';
import { Burger } from '@/components/ui/Burger/Burger';

interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseMenu = () => setIsOpen(false);
  const onOpenMenu = () => setIsOpen(true);

  return (
    <HeaderWrapper>
      <Burger onClick={onOpenMenu} />
      {isOpen && (
        <Overlay>
          <MenuWrapper>
            <CrossButton onClick={onCloseMenu}>✖</CrossButton>
            <Menu />
          </MenuWrapper>
        </Overlay>
      )}
      {children}
    </HeaderWrapper>
  );
};
