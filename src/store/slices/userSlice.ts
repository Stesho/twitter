import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@/types/user';

interface InitialState {
  user: User | null;
  isLoading: boolean;
}

const initialState: InitialState = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => ({
      ...state,
      user: action.payload,
    }),
    setIsLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isLoading: action.payload,
    }),
  },
});

export const { setUser, setIsLoading } = userSlice.actions;
export default userSlice.reducer;
