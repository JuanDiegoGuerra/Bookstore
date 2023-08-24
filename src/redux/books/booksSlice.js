import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    itemId: uuidv4(),
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    itemId: uuidv4(),
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    itemId: uuidv4(),
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
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
