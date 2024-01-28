import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TwitterLogoSrc from '@/assets/images/twitter_logo.png';
import { TweetModal } from '@/components/TweetModal/TweetModal';
import {
  LogOutButton,
  MenuList,
  Nav,
  TweetButton,
  TwitterLogo,
} from '@/components/ui/Menu/Menu.styled';
import { MenuItem } from '@/components/ui/MenuItem/MenuItem';
import { MenuProfile } from '@/components/ui/MenuProfile/MenuProfile';
import { MENU_ITEMS } from '@/constants/menu';
import { ROUTES } from '@/constants/routes';
import { logout } from '@/services/user/logout';

interface MenuProps {
  onLinkClick?: () => void;
}

export const Menu = ({ onLinkClick }: MenuProps) => {
  const [isModalOpened, setModalOpened] = useState(false);
  const navigate = useNavigate();

  const logoutUser = async () => {
    navigate(ROUTES.signup.path);
    await logout();
  };

  const openModal = () => setModalOpened(true);
  const closeModal = () => setModalOpened(false);

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
      <TweetButton onClick={openModal}>Tweet</TweetButton>
      <MenuProfile />
      <LogOutButton onClick={logoutUser}>Log out</LogOutButton>
      {isModalOpened && <TweetModal onClose={closeModal} />}
    </Nav>
  );
};
