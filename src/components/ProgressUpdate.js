import PropTypes from 'prop-types';

function ProgressUpdate({ chapter }) {
  return (
    <div className="update-container">
      <p className="current-chapter">CURRENT CHAPTER</p>
      <p className="chapter-name">{chapter}</p>
      <button className="update-btn" type="button">UPDATE PROGRESS</button>
    </div>
  );
}

export default ProgressUpdate;

ProgressUpdate.propTypes = {
  chapter: PropTypes.string.isRequired,
};
