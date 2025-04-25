
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../redux/booksSlice/booksSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});