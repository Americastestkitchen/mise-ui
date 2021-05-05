import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { color, font, fontSize, lineHeight, mixins } from '../../../styles';

const ArticleTextBlockWrapper = styled.div`
  margin-bottom: 3rem;
  width: 100%;

  &.article-text-block--box {
    background-color: ${color.white};
    padding: 2.4rem 1rem;

    .article-text-block__p {
      font: ${fontSize.md}/1.5 ${font.pnr};
    }
  }

  ${breakpoint('md')`
    &.article-text-block--box {
      background-color: ${color.white};
      padding: 2.4rem;
    }
  `}

  ${breakpoint('xlg')`
    ${({ width }) => (mixins.articlesWidth(width))}
  `}
`;

const ArticleTextBlockCopy = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArticleTextBlockHeading = styled.h3`
  color: ${color.eclipse};
  font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
  margin-bottom: 0.8rem;
  order: 0;
`;

const ArticleTextBlockP = styled.p`
  color: ${color.eclipse};
  font: ${fontSize.md}/${lineHeight.lg} ${font.mwr};
  order: 2;

  a {
    ${mixins.styledLink(color.turquoise, color.seaSalt)}
  }

  &.drop-cap {
    font-size: 2rem;

    &:first-letter {
      float: left;
      font-size: 6rem;
      font-weight: bold;
      line-height: 5rem;
      padding: 0.6rem 0.8rem 0 0;
    }
  }
`;

const ArticleTextBlockImageWrapper = styled.div`
  max-width: 100%;
  width: 100%;

  &.img-position--top {
    margin-bottom: 1.6rem;
    order: 1;
  }

  &.img-position--bottom {
    margin-top: 2rem;
    order: 3;
  }
`;

const ArticleTextBlockImage = styled.img`
  max-width: 100%;
  width: 100%;
`;

const generateImageElAndPosition = (photo) => {
  let imageEl = null;
  if (photo) {
    const { altText, photoDisplayOption, photoUrl } = photo;
    imageEl = (
      <ArticleTextBlockImageWrapper className={`article-text-block__img-wrapper img-position--${photoDisplayOption}`}>
        <ArticleTextBlockImage
          alt={altText}
          src={photoUrl}
        />
      </ArticleTextBlockImageWrapper>
    );
  }
  return imageEl;
};

const ArticleTextBlock = ({
  content,
  displayOption,
  dropCap,
  photo,
  title,
  width,
}) => (
  <ArticleTextBlockWrapper className={`article-text-block--${displayOption}`} width={width}>
    <ArticleTextBlockCopy>
      {
        title && (
          <ArticleTextBlockHeading>
            {title}
          </ArticleTextBlockHeading>
        )
      }
      {photo && generateImageElAndPosition(photo)}
      <ArticleTextBlockP
        className={`article-text-block__p${dropCap ? ' drop-cap' : ''}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </ArticleTextBlockCopy>
  </ArticleTextBlockWrapper>
);

ArticleTextBlock.propTypes = {
  /** Text content */
  content: PropTypes.string.isRequired,
  /** Default: no extra styles, box: wrap TextBlock in padded box */
  displayOption: PropTypes.oneOf(['default', 'box']),
  /** Display drop cap styles? */
  dropCap: PropTypes.bool,
  /** Photo configuration options */
  photo: PropTypes.shape({
    altText: PropTypes.string,
    photoDisplayOption: PropTypes.oneOf(['bottom', 'top']).isRequired,
    photoUrl: PropTypes.string.isRequired,
  }),
  /** Heading level 3 title for text block */
  title: PropTypes.string,
  /** Width configuration for PullQuote */
  width: PropTypes.oneOf(['default', 'wide']),
};

ArticleTextBlock.defaultProps = {
  displayOption: 'default',
  dropCap: false,
  photo: null,
  title: null,
  width: 'default',
};

export default ArticleTextBlock;
