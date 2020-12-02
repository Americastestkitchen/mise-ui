import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { getImageUrl } from '../../../../lib/cloudinary';

const PersonHeadShotWrapper = styled.div`
  ${({ size: { sm } }) => `
    border-radius: 50%;
    height: ${sm}rem;
    width: ${sm}rem;
  `}

  ${breakpoint('md')`
    ${({ size: { sm, md } }) => `
      height: ${md || sm}rem;
      width: ${md || sm}rem;
    `}
  `}

  ${breakpoint('lg')`
    ${({ size: { sm, md, lg } }) => `
      height: ${lg || md || sm}rem;
      width: ${lg || md || sm}rem;
    `}
  `}

  flex-shrink: 0;
  overflow: hidden;
`;

const PersonHeadShotImg = styled.img`
  height: 100%;
  object-cover: fit;
  width: 100%;
`;

const PersonHeadShot = ({ imgAlt, imgCloudinaryId, size }) => (
  <PersonHeadShotWrapper
    className="person-head-shot"
    data-testid="person-head-shot"
    size={size}
  >
    <PersonHeadShotImg
      alt={imgAlt}
      src={getImageUrl(imgCloudinaryId, { height: 100, width: 100 })}
    />
  </PersonHeadShotWrapper>
);

PersonHeadShot.propTypes = {
  /** Optional: Alt text for img */
  imgAlt: PropTypes.string,
  /** Source url for img */
  imgCloudinaryId: PropTypes.string.isRequired,
  /** Optional: REM value for breakpoints. 'sm' used as fallback for 'md' and
   * 'lg'. 'md' used as fallback for 'lg'. */
  size: PropTypes.shape({
    sm: PropTypes.string.isRequired,
    md: PropTypes.string,
    lg: PropTypes.string,
  }),
};

PersonHeadShot.defaultProps = {
  imgAlt: '',
  size: { sm: '10' },
};

export default PersonHeadShot;
