import React from 'react';
import { Icon, Item, ItemLink } from '@/components/ui/MenuItem/MenuItem.styled';

interface MenuItemProps {
  iconUrl: string;
  alt: string;
  caption: string;
  link: string;
}

export const MenuItem = ({ iconUrl, alt, caption, link }: MenuItemProps) => (
  <Item>
    <ItemLink to={link}>
      <Icon src={iconUrl} alt={alt} />
      <span>{caption}</span>
    </ItemLink>
  </Item>
);
