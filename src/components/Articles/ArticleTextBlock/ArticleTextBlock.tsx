import React from 'react';
import styled, { css } from 'styled-components';

import ArticleTextBlockFloatImage from './components/ArticleTextBlockFloatImage/ArticleTextBlockFloatimage';
import SidebarCard, { SidebarCardProps } from '../SidebarCard';
import { color, font, fontSize, lineHeight, mixins, withThemes } from '../../../styles';
import { md, untilMd, xlg } from '../../../styles/breakpoints';
import { cssThemedLink } from '../../../styles/mixins';

const ArticleTextBlockWrapper = styled.div<{width: 'default' | 'wide'}>`
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
    ${untilMd(css`
      .article-text-block__copy {
        display: flex;
        flex-direction: column;
      }
    `)}

  }

  ${md(css`
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
  `)}

  ${({ width }) => xlg(css`
    ${(mixins.articlesWidth(width))}
  `)}
`;

const ArticleTextBlockCopy = styled.div`
  ${xlg(css`
    position: relative;
  `)}
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
  a {
    ${cssThemedLink}
  }

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
  ${xlg(css`
    left: calc(100% + 1.6rem);
    position: absolute;
    top: 0;
  `)}
`;

export interface PhotoProps {
  altText: string,
  photoDisplayOption: 'bottom'| 'float'| 'sidebar'| 'top';
  photoUrl: string;
  caption?: string;
}

const generateImageElAndPosition = (photo: PhotoProps) => {
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

export interface ArticleTextBlockPropTypes {
  /** styled-components as prop on heading, defaults h3 */
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Text content */
  content: string;
  /** Default: no extra styles, box: wrap TextBlock in padded box */
  displayOption: 'default' | 'box';
  /** Display drop cap styles? */
  dropCap: boolean;
  /** Sets id for link to text block in TOC */
  includeInTOC: string | undefined;
  /** Photo configuration options */
  photo: PhotoProps | null;
  /** Sidebar card configuration options */
  sidebarCard: SidebarCardProps | null;
  /** Heading level 3 title for text block */
  title: string | null;
  /** Width configuration for PullQuote */
  width: 'default'| 'wide';
}

const ArticleTextBlock = ({
  as = 'h3',
  content,
  displayOption = 'default',
  dropCap = false,
  includeInTOC,
  photo = null,
  sidebarCard = null,
  title = null,
  width = 'default',
}:ArticleTextBlockPropTypes) => {
  let photoPosition = null;
  if (photo) photoPosition = photo.photoDisplayOption;
  const includePhoto = photo && photoPosition;

  return (
    <ArticleTextBlockWrapper
      className={`article-text-block--${displayOption}${photoPosition ? ` has-img--${photoPosition}` : ''}`}
      id={includeInTOC}
      data-testid={includeInTOC}
      width={width}
    >
      {
        title && (
          <ArticleTextBlockHeading
            className="article-text-block__heading"
            as={as}
            dangerouslySetInnerHTML={{ __html: title }}
          />
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

export default ArticleTextBlock;
