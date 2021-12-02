import React from 'react';
import PropTypes from 'prop-types';

const SurLaTable = ({ alt }) => (
  <img
    alt={alt}
    className="brand-surlatable"
    crossOrigin="anonymous"
    decoding="async"
    src="https://res.cloudinary.com/hksqkdlah/image/upload/v1620154961/Brands/SurLaTable.svg"
  />
);
SurLaTable.propTypes = {
  alt: PropTypes.string,
};

SurLaTable.defaultProps = {
  alt: 'SurLaTable Logo',
};

SurLaTable.displayName = 'SurLaTable';

export default SurLaTable;
