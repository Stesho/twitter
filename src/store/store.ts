import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '@/store/slices/userSlice';
import tweetsReducer from '@/store/slices/tweetsSlice';

const rootReducer = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
