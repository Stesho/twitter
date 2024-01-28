import React, { CSSProperties } from 'react';

import { Spinner, SpinnerWrapper } from '@/components/ui/Loader/Loader.styled';

interface LoaderProps {
  style?: CSSProperties;
}

export const Loader = ({ style }: LoaderProps) => (
  <SpinnerWrapper style={style}>
    <Spinner />
  </SpinnerWrapper>
);
