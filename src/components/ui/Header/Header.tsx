import React, { ReactNode, useState } from 'react';

import { Burger } from '@/components/ui/Burger/Burger';
import {
  CrossButton,
  HeaderWrapper,
  MenuWrapper,
  Overlay,
} from '@/components/ui/Header/Header.styled';
import { Menu } from '@/components/ui/Menu/Menu';

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
            <Menu onLinkClick={onCloseMenu} />
          </MenuWrapper>
        </Overlay>
      )}
      {children}
    </HeaderWrapper>
  );
};
