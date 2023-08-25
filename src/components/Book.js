import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Progress from './Progress';
import ProgressUpdate from './ProgressUpdate';

const Book = ({
  title, author, itemId, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="book-container">
      <div className="book-info">
        <p className="book-category">{category}</p>
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <div className="controls-container">
          <button className="book-control" type="button">
            Comments
          </button>
          <button
            className="book-control"
            type="button"
            onClick={() => dispatch(removeBook(itemId))}
          >
            Remove
          </button>
          <button className="book-control" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="book-extra">
        <Progress progress="60%" />
        <div className="divider" />
        <ProgressUpdate chapter="Chapter 1" />
      </div>
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
