import PropTypes from 'prop-types';
// import progresSvg from '../assets/progress.svg';
import { Circle } from 'rc-progress';

function Progress({ progress }) {
  return (
    <div className="progress-container">
      <Circle percent={progress.split('%')[0]} strokeWidth={8} strokeColor="#029aff" trailWidth={8} />
      <div className="progress-text">
        <p className="percent">{progress}</p>
        <p className="completed">Completed</p>
      </div>
    </div>
  );
}

export default Progress;

Progress.propTypes = {
  progress: PropTypes.string.isRequired,
};
