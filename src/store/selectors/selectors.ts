import { RootState } from '@/store/store';

export const userSelector = (state: RootState) => state.user;
export const themeSelector = (state: RootState) => state.theme;
