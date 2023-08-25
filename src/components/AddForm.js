import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newBook = {
      itemId: uuidv4(),
      title,
      author,
      category: 'N/A',
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleAdd}>
      <label htmlFor="bookTitle">
        Title
        <input type="text" id="bookTitle" placeholder="Title" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label htmlFor="bookAuthor">
        Author
        <input type="text" id="bookAuthor" placeholder="Author" value={author} onChange={handleAuthorChange} />
      </label>
      <br />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddForm;
