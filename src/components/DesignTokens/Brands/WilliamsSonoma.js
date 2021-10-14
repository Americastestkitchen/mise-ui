import React from 'react';
import PropTypes from 'prop-types';

const WilliamsSonoma = ({ alt }) => (
  <img
    alt={alt}
    className="brand-williams-sonoma"
    src="https://res.cloudinary.com/hksqkdlah/image/upload/v1620154961/Brands/WilliamsSonoma.svg"
  />
);
WilliamsSonoma.propTypes = {
  alt: PropTypes.string,
};

WilliamsSonoma.defaultProps = {
  alt: 'Williams Sonoma Logo',
};

WilliamsSonoma.displayName = 'Williams Sonoma';

export default WilliamsSonoma;
