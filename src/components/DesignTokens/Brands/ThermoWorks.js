import React from 'react';
import PropTypes from 'prop-types';

const ThermoWorks = ({ alt }) => (
  <img
    alt={alt}
    className="brand-thermoworks"
    crossOrigin="anonymous"
    decoding="async"
    src="https://res.cloudinary.com/hksqkdlah/image/upload/v1620154961/Brands/ThermoWorks.svg"
  />
);
ThermoWorks.propTypes = {
  alt: PropTypes.string,
};

ThermoWorks.defaultProps = {
  alt: 'ThermoWorks Logo',
};

ThermoWorks.displayName = 'ThermoWorks';

export default ThermoWorks;
