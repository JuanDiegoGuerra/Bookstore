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
      category: 'Action',
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">
        ADD A NEW BOOK
      </h2>
      <form className="add-form" onSubmit={handleAdd}>
        <label className="grow-3" htmlFor="bookTitle">
          <input className="input-control input-title" type="text" id="bookTitle" placeholder="Title" value={title} onChange={handleTitleChange} required />
        </label>
        <br />
        <label className="grow-3" htmlFor="bookAuthor">
          <select className="input-control input-author" id="bookAuthor" value={author} onChange={handleAuthorChange} required>
            <option value="Category">Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Nonfiction">Nonfiction</option>
            <option value="Horror">Horror</option>
            <option value="Drama">Drama</option>
            <option value="Romantic">Romantic</option>
            <option value="Comendy">Comendy</option>
          </select>
        </label>
        <br />
        <button className="input-control input-send" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddForm;
