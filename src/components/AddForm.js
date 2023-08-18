import PropTypes from 'prop-types';

const AddForm = ({
  handleAdd, handleTitle, handleAuthor, title, author,
}) => (
  <form onSubmit={handleAdd}>
    <label htmlFor="bookTitle">
      Title
      <input type="text" id="bookTitle" placeholder="Title" value={title} onChange={handleTitle} />
    </label>
    <br />
    <label htmlFor="bookAuthor">
      Author
      <input type="text" id="bookAuthor" placeholder="Author" value={author} onChange={handleAuthor} />
    </label>
    <br />
    <button type="submit">Add Book</button>
  </form>
);

export default AddForm;

AddForm.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleTitle: PropTypes.func.isRequired,
  handleAuthor: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
