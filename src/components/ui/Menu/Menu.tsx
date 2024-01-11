import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@/components/ui/MenuItem/MenuItem';
import { MENU_ITEMS } from '@/constants/menu';
import {
  LogOutButton,
  MenuList,
  Nav,
  TwitterLogo,
} from '@/components/ui/Menu/Menu.styled';
import TwitterLogoSrc from '@/assets/images/twitter_logo.png';
import { logout } from '@/services/user/logout';
import { ROUTES } from '@/constants/routes';

export const Menu = () => {
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
            caption={item.caption}
            link={item.link}
          />
        ))}
      </MenuList>
      <LogOutButton onClick={logoutUser}>Log out</LogOutButton>
    </Nav>
  );
};
