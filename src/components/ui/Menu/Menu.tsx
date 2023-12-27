import React from "react";
import { MenuItem } from "@/components/ui/MenuItem/MenuItem";
import { MENU_ITEMS } from "@/constants/menu";

export const Menu = () => (
  <ul>
    {MENU_ITEMS.map((item) => (
      <MenuItem
        key={item.caption}
        iconUrl={item.iconUrl}
        alt={item.alt}
        caption={item.caption}
      />
    ))}
  </ul>
);
