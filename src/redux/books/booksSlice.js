import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    title: 'Book 1',
    author: 'Author 1',
    progress: '60%',
  },
  {
    id: uuidv4(),
    title: 'Book 2',
    author: 'Author 2',
    progress: '76%',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
        progress: '0%',
      };
      state.push(newBook);
    },
    removeBook: (state, action) => {
      const itemId = action.payload.id;
      return state.filter((item) => item.id !== itemId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
