import { useState } from 'react';

import { Theme } from '@/types/theme';

export const useTheme = () => {
  const [theme, setTheme] = useState(Theme.light);

  const toggleTheme = () => {
    setTheme(theme === Theme.light ? Theme.dark : Theme.light);
  };

  return {
    theme,
    toggleTheme,
  };
};
