import React, { FunctionComponent, SVGProps } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Item,
  ItemIcon,
  ItemLink,
} from '@/components/ui/MenuItem/MenuItem.styled';

interface MenuItemProps {
  Icon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  IconActive: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  caption: string;
  link: string;
}

export const MenuItem = ({
  Icon,
  IconActive,
  caption,
  link,
}: MenuItemProps) => {
  const location = useLocation();

  return (
    <Item>
      <ItemLink to={link}>
        <ItemIcon>
          {location.pathname.includes(link) ? <IconActive /> : <Icon />}
        </ItemIcon>
        <span>{caption}</span>
      </ItemLink>
    </Item>
  );
};
