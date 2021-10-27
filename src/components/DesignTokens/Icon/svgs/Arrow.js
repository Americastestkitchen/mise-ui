import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Arrow = ({ ariaHidden, ariaLabel, fill, focusable }) => (
  <svg
    aria-hidden={ariaHidden}
    aria-label={ariaLabel}
    focusable={focusable}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17.553 13.419"
  >
    <path fill={fill} d="M17.165 5.788L11.751.374a1.2932983 1.2932983 0 10-1.829 1.829l3.2 3.215H1.293a1.2935 1.2935 0 000 2.587h11.825l-3.2 3.2a1.30003317 1.30003317 0 101.848 1.829l5.4-5.4a1.315 1.315 0 00.388-.924 1.242 1.242 0 00-.389-.922z" data-name="Path 32145" />
  </svg>
);

Arrow.propTypes = {
  ariaHidden: PropTypes.bool,
  ariaLabel: PropTypes.string,
  fill: PropTypes.string,
  focusable: PropTypes.bool,
};

Arrow.defaultProps = {
  ariaHidden: true,
  ariaLabel: null,
  fill: `${color.eclipse}`,
  focusable: false,
};

export default Arrow;
