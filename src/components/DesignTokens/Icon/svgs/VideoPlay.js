import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const VideoPlay = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 89 89"
    role="img"
    aria-label="play video"
  >
    <path fill={fill} fillRule="evenodd" d="M33 65V23l36 21-36 21zM44.5 0C19.925 0 0 19.924 0 44.5S19.924 89 44.5 89C69.078 89 89 69.076 89 44.5S69.077 0 44.5 0z" />
  </svg>
);

VideoPlay.propTypes = {
  fill: PropTypes.string,
};

VideoPlay.defaultProps = {
  fill: `${color.eclipse}`,
};

export default VideoPlay;
