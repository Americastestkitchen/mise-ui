import React from 'react';
import PropTypes from 'prop-types';

const BlueApron = ({ alt }) => (
  <img
    alt={alt}
    className="brand-blueapron"
    src="https://res.cloudinary.com/hksqkdlah/image/upload/v1620155429/Brands/BlueApron.svg"
  />
);

BlueApron.propTypes = {
  alt: PropTypes.string,
};

BlueApron.defaultProps = {
  alt: 'Blue Apron Logo',
};

BlueApron.displayName = 'Blue Apron';

export default BlueApron;
