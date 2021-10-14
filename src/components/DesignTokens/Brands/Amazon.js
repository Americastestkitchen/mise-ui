import React from 'react';
import PropTypes from 'prop-types';

const Amazon = ({ alt }) => (
  <img
    alt={alt}
    className="brand-amazon"
    src="https://res.cloudinary.com/hksqkdlah/image/upload/v1620155553/Brands/Amazon.svg"
  />
);
Amazon.propTypes = {
  alt: PropTypes.string,
};

Amazon.defaultProps = {
  alt: 'Amazon Logo',
};

Amazon.displayName = 'Amazon';

export default Amazon;
