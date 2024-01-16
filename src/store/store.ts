import { combineReducers, configureStore } from '@reduxjs/toolkit';

import notificationReducer from '@/store/slices/notificationSlice';
import themeReducer from '@/store/slices/themeSlice';
import userReducer from '@/store/slices/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  notification: notificationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
