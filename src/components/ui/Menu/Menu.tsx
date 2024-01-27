import React from 'react';
import { useNavigate } from 'react-router-dom';

import TwitterLogoSrc from '@/assets/images/twitter_logo.png';
import {
  LogOutButton,
  MenuList,
  Nav,
  TwitterLogo,
} from '@/components/ui/Menu/Menu.styled';
import { MenuItem } from '@/components/ui/MenuItem/MenuItem';
import { MENU_ITEMS } from '@/constants/menu';
import { ROUTES } from '@/constants/routes';
import { logout } from '@/services/user/logout';

interface MenuProps {
  onLinkClick?: () => void;
}

export const Menu = ({ onLinkClick }: MenuProps) => {
  const navigate = useNavigate();

  const logoutUser = async () => {
    navigate(ROUTES.signup.path);
    await logout();
  };

  return (
    <Nav>
      <TwitterLogo src={TwitterLogoSrc} />
      <MenuList>
        {MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.caption}
            Icon={item.iconUrl}
            IconActive={item.iconUrlActive}
            caption={item.caption}
            link={item.link}
            onClick={onLinkClick}
          />
        ))}
      </MenuList>
      <LogOutButton onClick={logoutUser}>Log out</LogOutButton>
    </Nav>
  );
};
