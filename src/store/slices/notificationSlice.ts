import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Notifications } from '@/types/notifications';

interface InitialState {
  type: Notifications;
  text: string;
  isShow: boolean;
  readonly lifeTimeMs: number;
}

type Payload = Partial<Omit<InitialState, 'lifeTimeMs'>>;

const initialState: InitialState = {
  type: Notifications.Success,
  text: '',
  isShow: false,
  lifeTimeMs: 3000,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<Payload>) => ({
      ...state,
      text: action.payload.text ?? state.text,
      isShow: action.payload.isShow ?? state.isShow,
      type: action.payload.type ?? state.type,
    }),
  },
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
