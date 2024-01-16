import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@/types/user';

interface InitialState {
  user: User | null;
}

const initialState: InitialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<User | null>) => ({
      user: action.payload,
    }),
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
