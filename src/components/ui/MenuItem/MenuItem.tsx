import React from "react";
import { Icon, Item } from "@/components/ui/MenuItem/MenuItem.styled";

interface MenuItemProps {
  iconUrl: string;
  alt: string;
  caption: string;
}

export const MenuItem = ({ iconUrl, alt, caption }: MenuItemProps) => (
    <Item>
      <Icon src={iconUrl} alt={alt} />
      <span>{caption}</span>
    </Item>
  );
