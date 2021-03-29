import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const LandingPlay = ({ fill }) => (
  <svg
    aria-hidden="true"
    className="landing-play-icon"
    fill={fill}
    focusable="false"
    viewBox="0 0 30.001 30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#6ba6aa"
      d="M15 30A15 15 0 014.393 4.393a15 15 0 1121.214 21.213A14.9 14.9 0 0115 30zM10.764 7.506a.5.5 0 00-.5.5v13.986a.5.5 0 00.5.5.5.5 0 00.264-.077l11.188-6.992a.5.5 0 000-.849L11.029 7.583a.5.5 0 00-.265-.077z"
    />
  </svg>

);

LandingPlay.propTypes = {
  fill: PropTypes.string,
};

LandingPlay.defaultProps = {
  fill: `${color.eclipse}`,
};

export default LandingPlay;
