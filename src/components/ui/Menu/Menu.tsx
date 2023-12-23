import React from "react";
import { MenuItem } from "@/components/ui/MenuItem/MenuItem";
import { menuItems } from "@/constants/menu";

export const Menu = () => (
  <ul>
    {menuItems.map((item) => (
      <MenuItem
        key={item.caption}
        iconUrl={item.iconUrl}
        alt={item.alt}
        caption={item.caption}
      />
    ))}
  </ul>
);
