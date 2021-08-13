import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import {
  color,
  font,
  fontSize,
  lineHeight,
  spacing,
  withThemes,
} from '../../styles';
import PersonHeadShot from '../Cards/shared/PersonHeadShot';

const BylineWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoint('md')`
    align-items: center;
    flex-direction: row;
  `}
`;

const AuthorTheme = {
  default: css`
    align-items: center;
    display: flex;

    span {
      color: ${color.eclipse};
      font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
    }

    .person-head-shot {
      margin-right: ${spacing.sm};
    }
  `,
  atk: css`
    span {
      color: ${color.eclipse};
    }
  `,
  cco: css`
    span {
      color: ${color.black};
    }
  `,
  cio: css`
    span {
      color: ${color.cork};
    }
  `,
};

const Author = styled.div.attrs({
  className: 'byline__author',
})`
  ${withThemes(AuthorTheme)}
`;

const AttributionTheme = {
  default: css`
    display: flex;
    margin-top: ${spacing.sm};

    span {
      font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};

      &:first-child {
        margin: ${props => (props.author && props.attribution ? `0 ${spacing.xsm}` : '0')};   
      }
    }

    ${breakpoint('md')`
      margin-top: 0;
    `}
  `,
  atk: css`
    span {
      color: ${color.eclipse};
    }
  `,
  cco: css`
    span {
      color: ${color.black};
    }
  `,
  cio: css`
    span {
      color: ${color.cork};
    }
  `,
};

const Attribution = styled.div.attrs({
  className: 'byline__attribution',
})`
  ${withThemes(AttributionTheme)}
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
    <Attribution author={author} attribution={attribution}>
      {author && attribution && <span> |</span>}
      {attribution && <span>{attribution}</span>}
    </Attribution>
  </BylineWrapper>
);

Byline.propTypes = {
  /** Author Name */
  author: PropTypes.string,
  /** Cloudinary image id of author */
  authorImageCloudinaryId: PropTypes.string,
  /** Optional field to add custom text information such as publish date or author title */
  attribution: PropTypes.string,
  className: PropTypes.string,
  /** Optional: Alt text for img */
  imgAlt: PropTypes.string,
};

Byline.defaultProps = {
  author: '',
  authorImageCloudinaryId: null,
  attribution: '',
  className: '',
  imgAlt: '',
};

export default Byline;
