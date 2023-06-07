import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/greetingSlice.js';

export const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});
