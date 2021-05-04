import React from 'react';
import PropTypes from 'prop-types';

import { color } from '../../../../styles';

const CircleFour = ({ fill }) => (
  <img
    alt=""
    width="132"
    height="30"
    src="https://res.cloudinary.com/hksqkdlah/image/upload/v1620148678/TextDecorations/CircleFour.svg"
  />
);

CircleFour.propTypes = {
  fill: PropTypes.string,
};

CircleFour.defaultProps = {
  fill: color.turquoise,
};

export default CircleFour;
