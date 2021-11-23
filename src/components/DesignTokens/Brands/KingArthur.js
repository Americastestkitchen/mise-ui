import React from 'react';
import PropTypes from 'prop-types';

const KingArthur = ({ alt }) => (
  <img
    alt={alt}
    className="brand-king-arthur"
    crossOrigin="anonymous"
    decoding="async"
    src="https://res.cloudinary.com/hksqkdlah/image/upload/v1620154961/Brands/KingArthur.svg"
  />
);
KingArthur.propTypes = {
  alt: PropTypes.string,
};

KingArthur.defaultProps = {
  alt: 'King Arthur Logo',
};

KingArthur.displayName = 'KingArthur';

export default KingArthur;
