import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tweet } from '@/types/Tweet';

interface InitialState {
  tweets: Tweet[];
}

const initialState: InitialState = {
  tweets: [],
};

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    setTweets: (state, action: PayloadAction<Tweet[]>) => {
      state.tweets = action.payload;
    },
    addTweet: (state, action: PayloadAction<Tweet>) => {
      state.tweets.push(action.payload);
    },
  },
});

export const { setTweets, addTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
