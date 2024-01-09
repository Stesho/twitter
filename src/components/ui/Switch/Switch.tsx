import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SwitchButton } from '@/components/ui/Switch/Switch.styled';
import { themeSelector } from '@/store/selectors/selectors';
import { toggleTheme } from '@/store/slices/themeSlice';
import { Theme } from '@/types/theme';

export const Switch = () => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  const onChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <SwitchButton>
      <input
        type='checkbox'
        checked={theme === Theme.dark}
        onChange={onChange}
      />
      <span />
    </SwitchButton>
  );
};
