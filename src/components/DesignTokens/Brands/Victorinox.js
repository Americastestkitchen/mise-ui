import React from 'react';
import PropTypes from 'prop-types';

const Victorinox = ({ alt }) => (
  <img
    alt={alt}
    className="brand-victorinox"
    src="https://res.cloudinary.com/hksqkdlah/image/upload/v1620154961/Brands/Victorinox.svg"
  />
);
Victorinox.propTypes = {
  alt: PropTypes.string,
};

Victorinox.defaultProps = {
  alt: 'Victorinox Logo',
};

Victorinox.displayName = 'Victorinox';

export default Victorinox;
