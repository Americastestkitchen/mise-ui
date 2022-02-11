import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import ArticleTextBlockFloatImage from './components/ArticleTextBlockFloatImage';
import SidebarCard from '../SidebarCard';
import { color, font, fontSize, lineHeight, mixins, withThemes } from '../../../styles';

const ArticleTextBlockWrapper = styled.div`
  margin-bottom: 2.4rem;
  width: 100%;

  &.article-text-block--box {
    background-color: ${color.white};
    padding: 2.4rem 1rem;

    ${withThemes({ cco: mixins.ccoReviewSetBorder() })}

    .article-text-block__p {
      font: ${fontSize.md}/1.5 ${font.pnr};
      strong,h1,h2,h3,h4,h5 {
        font-family: ${font.pnb};
        font-weight: 400;
      }
      
    }
  }

  &.has-img--top,
  &.has-img--bottom {
    order: 0;

    .article-text-block__p {
      order: 2;
    }

    .article-text-block__copy {
      display: flex;
      flex-direction: column;
    }
  }

  &.has-img--float {
    ${breakpoint('xs', 'md')`
      .article-text-block__copy {
        display: flex;
        flex-direction: column;
      }
    `}

  }

  ${breakpoint('md')`
    &.article-text-block--box {
      background-color: ${color.white};
      padding: 2.4rem;
    }

    &.has-img--float {
      ${mixins.articlesWidth('wide')}

      .article-text-block__p {
        ${mixins.articlesWidth('default')}
      }
    }
  `}

  ${breakpoint('xlg')`
    ${({ width }) => (mixins.articlesWidth(width))}
  `}
`;

const ArticleTextBlockCopy = styled.div`
  ${breakpoint('xlg')`
    position: relative;
  `}
`;

const ArticleTextBlockHeadingTheme = {
  default: css`
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: 0.8rem;
  `,
  atk: css`
    color: ${color.eclipse};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const ArticleTextBlockHeading = styled.h3`
  ${withThemes(ArticleTextBlockHeadingTheme)}
`;

const ArticleTextBlockContentTheme = {
  default: css`
    font: ${fontSize.md}/${lineHeight.lg} ${font.mwr};
    margin-bottom: 2.4rem;

    > p {
      margin-bottom: 2.4rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    ${mixins.articlesBoxLists()}

    &:last-child {
      margin-bottom: 0;
    }

    &.drop-cap {
      > p {
        &:first-child {
          font-size: 2rem;
          ${mixins.articlesWidth('wide')}

          &:first-letter {
            float: left;
            font-size: 6rem;
            font-weight: bold;
            line-height: 5rem;
            padding: 0.6rem 0.8rem 0 0;
          }
        }

        ${mixins.articlesWidth('default')}
      }
    }
  `,
  atk: css`
    color: ${color.eclipse};

    a {
      ${mixins.styledLink(color.turquoise, color.seaSalt)}
    }

  `,
  cco: css`
    color: ${color.black};

    a {
      ${mixins.styledLink(color.malibu, color.cornflower)}
    }
  `,
  cio: css`
    color: ${color.cork};

    a {
      ${mixins.styledLink(color.dijon, color.sand)}
    }
  `,
};

const ArticleTextBlockContent = styled.div`
  ${withThemes(ArticleTextBlockContentTheme)}
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
  display: block;
  max-width: 100%;
  width: 100%;
`;

const ArticleTextBlockSidebarCard = styled.div`
  ${breakpoint('xlg')`
    left: calc(100% + 1.6rem);
    position: absolute;
    top: 0;
  `}
`;

const generateImageElAndPosition = (photo) => {
  let imageEl = null;
  if (photo) {
    const { altText, photoDisplayOption, photoUrl } = photo;
    if (photoDisplayOption === 'float' || photoDisplayOption === 'sidebar') {
      imageEl = <ArticleTextBlockFloatImage {...photo} />;
    } else {
      imageEl = (
        <ArticleTextBlockImageWrapper className={`article-text-block__img-wrapper img-position--${photoDisplayOption}`}>
          <ArticleTextBlockImage
            alt={altText}
            src={photoUrl}
          />
        </ArticleTextBlockImageWrapper>
      );
    }
  }
  return imageEl;
};

const ArticleTextBlock = ({
  as,
  content,
  displayOption,
  dropCap,
  includeInTOC,
  photo,
  sidebarCard,
  title,
  width,
}) => {
  let photoPosition = null;
  if (photo) photoPosition = photo.photoDisplayOption;
  const includePhoto = photo && photoPosition;

  return (
    <ArticleTextBlockWrapper
      className={`article-text-block--${displayOption}${photoPosition ? ` has-img--${photoPosition}` : ''}`}
      id={includeInTOC || null}
      width={width}
    >
      {
        title && (
          <ArticleTextBlockHeading className="article-text-block__heading" as={as}>
            {title}
          </ArticleTextBlockHeading>
        )
      }
      <ArticleTextBlockCopy className="article-text-block__copy">
        {includePhoto && generateImageElAndPosition(photo)}
        <ArticleTextBlockContent
          className={`article-text-block__p${dropCap ? ' drop-cap' : ''}`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {sidebarCard && (
          <ArticleTextBlockSidebarCard>
            <SidebarCard {...sidebarCard} />
          </ArticleTextBlockSidebarCard>
        )}
      </ArticleTextBlockCopy>
    </ArticleTextBlockWrapper>
  );
};

ArticleTextBlock.propTypes = {
  /** styled-components as prop on heading, defaults h3 */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /** Text content */
  content: PropTypes.string.isRequired,
  /** Default: no extra styles, box: wrap TextBlock in padded box */
  displayOption: PropTypes.oneOf(['default', 'box']),
  /** Display drop cap styles? */
  dropCap: PropTypes.bool,
  /** Sets id for link to text block in TOC */
  includeInTOC: PropTypes.string,
  /** Photo configuration options */
  photo: PropTypes.shape({
    altText: PropTypes.string,
    photoDisplayOption: PropTypes.oneOf(['bottom', 'float', 'sidebar', 'top']).isRequired,
    photoUrl: PropTypes.string.isRequired,
  }),
  /** Sidebar card configuration options */
  sidebarCard: PropTypes.shape({
    ...SidebarCard.propTypes,
  }),
  /** Heading level 3 title for text block */
  title: PropTypes.string,
  /** Width configuration for PullQuote */
  width: PropTypes.oneOf(['default', 'wide']),
};

ArticleTextBlock.defaultProps = {
  as: 'h3',
  displayOption: 'default',
  dropCap: false,
  includeInTOC: null,
  photo: null,
  sidebarCard: null,
  title: null,
  width: 'default',
};

export default ArticleTextBlock;
