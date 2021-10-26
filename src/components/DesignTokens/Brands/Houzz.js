import React from 'react';
import PropTypes from 'prop-types';

const Houzz = ({ alt }) => (
  <img
    alt={alt}
    className="brand-houzz"
    src="https://res.cloudinary.com/hksqkdlah/image/upload/v1620154963/Brands/Houzz.svg"
  />
);
Houzz.propTypes = {
  alt: PropTypes.string,
};

Houzz.defaultProps = {
  alt: 'Houzz Logo',
};

Houzz.displayName = 'Houzz';

export default Houzz;
