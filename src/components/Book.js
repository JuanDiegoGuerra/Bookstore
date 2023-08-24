import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = (
  {
    title, author, itemId, category,
  },
) => {
  const dispatch = useDispatch();

  return (
    <div className="book-container">
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{category}</p>
      <button type="button" onClick={() => dispatch(removeBook(itemId))}>Delete</button>
    </div>
  );
};

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
