import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '@/store/slices/userSlice';
import themeReducer from '@/store/slices/themeSlice';
import notificationReducer from '@/store/slices/notificationSlice';

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
