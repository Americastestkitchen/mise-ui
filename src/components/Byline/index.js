import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import {
  color,
  font,
  fontSize,
  lineHeight,
  spacing,
} from '../../styles';
import PersonHeadShot from '../Cards/shared/PersonHeadShot';

const BylineWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${color.eclipse};
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};

    &:first-of-type {
      font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
    }
  }

  ${breakpoint('md')`
    align-items: center;
    flex-direction: row;
  `}
`;

const Author = styled.div.attrs({
  className: 'byline__author',
})`
  align-items: center;
  display: flex;

  .person-head-shot {
    margin-right: ${spacing.sm};
  }
`;

const Attribution = styled.div.attrs({
  className: 'byline__attribution',
})`
  display: flex;
  margin-top: ${spacing.sm};

  span:first-child {
    display: ${props => (props.attribution ? 'none' : 'block')};  
    margin: 0 ${spacing.xsm};
  }

  ${breakpoint('md')`
    margin-top: 0;

    span:first-child {
      display: block;
    }
  `}
`;

const Byline = ({
  author,
  authorImageCloudinaryId,
  attribution,
  className,
  imgAlt,
}) => (
  <BylineWrapper className={`byline${authorImageCloudinaryId ? '' : ' no-image'}${className ? ` ${className}` : ''}`}>
    <Author>
      {authorImageCloudinaryId && <PersonHeadShot imgCloudinaryId={authorImageCloudinaryId} size={{ sm: '4' }} imgAlt={imgAlt} />}
      <span rel="author">{author}</span>
    </Author>
    <Attribution attribution={attribution}>
      {author && attribution && (<span> |</span>)}
      {attribution && <span>{attribution}</span>}
    </Attribution>
  </BylineWrapper>
);

Byline.propTypes = {
  /** Author Name */
  author: PropTypes.string.isRequired,
  /** Cloudinary image id of author */
  authorImageCloudinaryId: PropTypes.string,
  /** Optional field to add custom text information such as publish date or author title */
  attribution: PropTypes.string,
  className: PropTypes.string,
  /** Optional: Alt text for img */
  imgAlt: PropTypes.string,
};


Byline.defaultProps = {
  authorImageCloudinaryId: null,
  attribution: '',
  className: '',
  imgAlt: '',
};
export default Byline;
