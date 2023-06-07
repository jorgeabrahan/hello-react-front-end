import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  greeting: {},
  status: 'idle',
  error: '',
};

const LOCALHOST = 'http://127.0.0.1:3000';

export const fetchRandomGreeting = createAsyncThunk(
  'random_greeting/get',
  () =>
    new Promise((resolve, reject) => {
      fetch(`${LOCALHOST}/random_greeting`)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    }),
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchRandomGreeting.fulfilled, (state, { payload }) => ({
        ...state,
        greeting: payload?.greeting,
        status: 'fulfilled',
      }))
      .addCase(fetchRandomGreeting.rejected, (state, { error }) => ({
        ...state,
        status: 'rejected',
        error: error.message,
      }));
  },
});

export default greetingSlice.reducer;
