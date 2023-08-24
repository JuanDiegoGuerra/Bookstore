import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    itemId: uuidv4(),
    title: 'Resident Evil',
    author: 'S.D. Perry',
    category: 'Fiction',
  },
  {
    itemId: uuidv4(),
    title: 'Luna De Pluton',
    author: 'Dross',
    category: 'Fiction',
  },
  {
    itemId: uuidv4(),
    title: 'The Batman who laughs',
    author: 'Scott Snyder',
    category: 'Fiction',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        itemId: action.payload.itemId,
        title: action.payload.title,
        author: action.payload.author,
        category: 'N/A',
      };
      state.push(newBook);
    },
    removeBook: (state, action) => {
        const bookPosition = state.findIndex((book) => book.itemId === action.payload);
        if (bookPosition !== -1) {
          state.splice(bookPosition, 1);
        }
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
