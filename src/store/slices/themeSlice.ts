import { createSlice } from '@reduxjs/toolkit';
import { Theme } from '@/types/theme';

const themeSlice = createSlice({
  name: 'theme',
  initialState: Theme.light,
  reducers: {
    toggleTheme: (state) => (state === Theme.light ? Theme.dark : Theme.light),
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
