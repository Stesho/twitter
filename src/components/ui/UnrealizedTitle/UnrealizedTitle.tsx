import React, { ReactNode } from 'react';

import { Title } from './UnrealizedTitle.styles';

interface UnrealizedTitleProps {
  children: ReactNode;
}

export const UnrealizedTitle = ({ children }: UnrealizedTitleProps) => (
  <Title>{children}</Title>
);
