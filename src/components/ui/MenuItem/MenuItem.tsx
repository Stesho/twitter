import React, { FunctionComponent, SVGProps } from 'react';
import {
  ItemIcon,
  Item,
  ItemLink,
} from '@/components/ui/MenuItem/MenuItem.styled';

interface MenuItemProps {
  Icon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  caption: string;
  link: string;
}

export const MenuItem = ({ Icon, caption, link }: MenuItemProps) => (
  <Item>
    <ItemLink to={link}>
      {/* <Icon src={iconUrl} alt={alt} /> */}
      <ItemIcon>
        <Icon />
      </ItemIcon>
      <span>{caption}</span>
    </ItemLink>
  </Item>
);
