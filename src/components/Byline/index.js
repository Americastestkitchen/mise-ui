import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  color,
  font,
  fontSize,
  lineHeight,
  spacing,
} from '../../styles';
import PersonHeadShot from '../Cards/shared/PersonHeadShot';

const BylineWrapper = styled.div`
  align-items: center;
  display: flex;
  .person-head-shot {
    margin-right: ${spacing.sm};
  }

  span {
    color: ${color.eclipse};
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};
    margin: 0 ${spacing.xsm};

    &:first-of-type {
      font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
      margin: 0;
    }

    :last-of-type {
      margin: 0;
    }
  }
`;

const Byline = ({
  author,
  authorImageCloudinaryId,
  attribution,
  imgAlt,
}) => (
  <BylineWrapper className={`byline${authorImageCloudinaryId ? '' : ' no-image'}`}>
    {authorImageCloudinaryId && <PersonHeadShot imgCloudinaryId={authorImageCloudinaryId} size={{ sm: '4' }} imgAlt={imgAlt} />}
    <span rel="author">{author}</span>
    {author && attribution && (<span> |</span>)}
    {attribution && <span>{attribution}</span>}
  </BylineWrapper>
);

Byline.propTypes = {
  /** Author Name */
  author: PropTypes.string.isRequired,
  /** Cloudinary image id of author */
  authorImageCloudinaryId: PropTypes.string,
  /** Optional field to add custom text information such as publish date or author title */
  attribution: PropTypes.string,
  /** Optional: Alt text for img */
  imgAlt: PropTypes.string,
};

Byline.defaultProps = {
  authorImageCloudinaryId: null,
  attribution: '',
  imgAlt: '',
};

export default Byline;
