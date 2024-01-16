import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  isShow: boolean;
}

const initialState: InitialState = {
  isShow: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setIsShow: (_, action: PayloadAction<boolean>) => ({
      isShow: action.payload,
    }),
  },
});

export const { setIsShow } = notificationSlice.actions;
export default notificationSlice.reducer;
