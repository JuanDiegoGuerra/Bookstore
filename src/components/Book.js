import PropTypes from 'prop-types';

const Book = ({
  title, author, progress, handleDelete, id,
}) => (
  <div className="book-container">
    <h2>{title}</h2>
    <p>{author}</p>
    <p>{progress}</p>
    <button type="button" onClick={() => handleDelete(id)}>Delete</button>
  </div>
);

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
