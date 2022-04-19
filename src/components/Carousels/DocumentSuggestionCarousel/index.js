import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import BaseCarousel from '../BaseCarousel';
import SuggestionCard from '../../Cards/SuggestionCard';
import { color, font, fontSize, letterSpacing, lineHeight, spacing, withThemes } from '../../../styles';

const TitleTheme = {
  default: css`
    color: ${color.eclipse};
    font: 700 ${fontSize.md}/${lineHeight.md} ${font.msr};
    letter-spacing: 1.28px;
    margin-bottom: ${spacing.xsm};
    text-transform: uppercase;

    ${breakpoint('xs', 'md')`
      padding-right: ${spacing.md};
    `}
  `,
  dark: css``,
};

export const Title = styled.h2.attrs({
  className: 'document-suggestion-carousel__title',
})`${withThemes(TitleTheme)}`;

const SubtitleTheme = {
  default: css`
    color: ${color.eclipse};
    font: normal ${fontSize.md}/1 ${font.mwr};
    letter-spacing: ${letterSpacing.md};
    margin-bottom: ${spacing.xsm};
    font-style: italic;

    ${breakpoint('xs', 'md')`
      padding-right: ${spacing.md};
    `}
  `,
};

export const Subtitle = styled.span.attrs({
  className: 'document-suggestion-carousel__subtitle',
})`${withThemes(SubtitleTheme)}`;

const DocumentListCarouselTheme = {
  default: css`
    color: ${color.eclipse};

    .carousel {
      padding-top: 0;

      &:not(.flickity-enabled) {
        .carousel-cell {
          flex: 0 0 auto;
          width: calc(100% - 6.4rem);
        }
      }

      .flickity-viewport {
        height: 52rem !important;

        ${breakpoint('md')`
          height: 32rem !important;
        `}
      }
    }

    div.carousel-cell {
      &:not(.is-selected) {
        opacity: 0.5;
      }
    }


    ${breakpoint('xs', 'md')`
      .carousel-cell {
        width: calc(100% - ${spacing.sm});
      }
    `}
  `,
};

const DocumentListCarouselWrapper = styled.div`
  ${withThemes(DocumentListCarouselTheme)}
`;

const DocumentSuggestionCarousel = ({
  // initialIndex,
  items,
  loading,
  title,
  subtitle,
}) => (
  <DocumentListCarouselWrapper
    className="document-suggestion-carousel"
  >
    <Subtitle>{subtitle}</Subtitle>
    {loading ? (
      <SuggestionCard.Loading
        title={title}
        subtitle={subtitle}
      />
    ) : (
      <BaseCarousel
        title={title}
        showDivider
      >
        {items.map((item, idx) => (
          <SuggestionCard
            dataIdx={idx}
            key={`carousel-cell-${item.objectId}`}
            avgRating={item.avgRating}
            numRatings={item.numRatings}
            comments={item.comments}
            href={item.href}
            imageUrl={item.imageUrl}
            objectId={item.objectId}
            siteKey={item.siteKey}
            subtitle={item.subtitle}
            title={item.title}
            stickers={item.stickers}
          />
        ))}
      </BaseCarousel>
    )}
  </DocumentListCarouselWrapper>
);

DocumentSuggestionCarousel.propTypes = {
  /** Index of the slide to display upon initialization */
  // initialIndex: PropTypes.number,
  loading: PropTypes.bool,
  /** List of items for the carousel */
  items: PropTypes.array.isRequired,
  /** Larger title displayed above carousel */
  subtitle: PropTypes.string,
  /** Larger title displayed above carousel */
  title: PropTypes.string.isRequired,
};

DocumentSuggestionCarousel.defaultProps = {
  // initialIndex: 0,
  loading: false,
  subtitle: null,
};

export default DocumentSuggestionCarousel;
