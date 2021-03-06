import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import ArticleTextBlockFloatImage from './components/ArticleTextBlockFloatImage';
import SidebarCard from '../SidebarCard';
import { color, font, fontSize, lineHeight, mixins } from '../../../styles';

const ArticleTextBlockWrapper = styled.div`
  margin-bottom: 2.4rem;
  width: 100%;

  &.article-text-block--box {
    background-color: ${color.white};
    padding: 2.4rem 1rem;

    .article-text-block__p {
      font: ${fontSize.md}/1.5 ${font.pnr};
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

const ArticleTextBlockHeading = styled.h3`
  color: ${color.eclipse};
  font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
  margin-bottom: 0.8rem;
`;

const ArticleTextBlockContent = styled.div`
  color: ${color.eclipse};
  font: ${fontSize.md}/${lineHeight.lg} ${font.mwr};
  margin-bottom: 2.4rem;

  a {
    ${mixins.styledLink(color.turquoise, color.seaSalt)}
  }

  > p {
    margin-bottom: 2.4rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ol {
    padding: 0;

    li {
      display: flex;
      counter-increment: li;

      &::before {
        content: counter(li)".";
        color: ${color.mediumGray};
        font: ${fontSize.sm}/1.5 ${font.pnb};
        display: inline-block;
        margin-top: 0.2rem;
        min-width: 1.8rem;
      }
    }
  }

  ul {
    li {
      align-items: flex-start;
      margin-bottom: 1rem;
      padding-left: 1.2rem;
      position: relative;

      &:last-child {
        margin-bottom: 0;
      }

      &::before {
        border-radius: 4px;
        content: ' ';
        background-color: ${color.eclipse};
        left: 0;
        margin: 1.2rem 0.8rem 0 0;
        min-height: 4px;
        min-width: 4px;
        position: absolute;
      }
    }
  }

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
  content,
  displayOption,
  dropCap,
  photo,
  sidebarCard,
  title,
  width,
}) => {
  let photoPosition = null;
  if (photo) photoPosition = photo.photoDisplayOption;
  const includePhoto = photo && photoPosition;

  return (
    <ArticleTextBlockWrapper className={`article-text-block--${displayOption}${photoPosition ? ` has-img--${photoPosition}` : ''}`} width={width}>
      {
        title && (
          <ArticleTextBlockHeading className="article-text-block__heading">
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
  /** Text content */
  content: PropTypes.string.isRequired,
  /** Default: no extra styles, box: wrap TextBlock in padded box */
  displayOption: PropTypes.oneOf(['default', 'box']),
  /** Display drop cap styles? */
  dropCap: PropTypes.bool,
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
  displayOption: 'default',
  dropCap: false,
  photo: null,
  sidebarCard: null,
  title: null,
  width: 'default',
};

export default ArticleTextBlock;
