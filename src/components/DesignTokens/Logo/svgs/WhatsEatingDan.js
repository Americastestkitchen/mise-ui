import React from 'react';
import PropTypes from 'prop-types';

import { color } from '../../../../styles';

const WhatsEatingDan = ({ fill }) => (
  <img
    alt=""
    width="100"
    height="88"
    src="https://res.cloudinary.com/hksqkdlah/image/upload/v1620159972/Logos/WhatsEatingDan.svg"
  />
);

WhatsEatingDan.propTypes = {
  fill: PropTypes.string,
};

WhatsEatingDan.defaultProps = {
  fill: color.white,
};

export default WhatsEatingDan;
