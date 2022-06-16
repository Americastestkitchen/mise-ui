import React from 'react';
// import PropTypes from 'prop-types';
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

interface AttributionType {
  author: string;
  attribution?: string;
}

const AttributionTheme = {
  default: css<AttributionType>`
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
})<AttributionType>`
  ${withThemes(AttributionTheme)}
`;

export interface ByLineProps extends AttributionType{
  authorImageCloudinaryId?: string;
  className?: string;
  imgAlt?: string;
}

export default function Byline({
  author,
  authorImageCloudinaryId,
  attribution,
  className,
  imgAlt,
}: ByLineProps) {
  return (
    <BylineWrapper className={`byline${authorImageCloudinaryId ? '' : ' no-image'}${className ? ` ${className}` : ''}`}>
      <Author>
        {authorImageCloudinaryId && <PersonHeadShot imgCloudinaryId={authorImageCloudinaryId} size={{ sm: '4' }} imgAlt={imgAlt} />}
        <span>{author}</span>
      </Author>
      <Attribution author={author} attribution={attribution}>
        {author && attribution && <span> |</span>}
        {attribution && <span>{attribution}</span>}
      </Attribution>
    </BylineWrapper>
  );
}
