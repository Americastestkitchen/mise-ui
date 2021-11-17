import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import CardCarousel from '../CardCarousel';
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
    color: ${color.nobel};
    font: 700 ${fontSize.xsm}/1 ${font.msr};
    letter-spacing: ${letterSpacing.md};
    margin-bottom: ${spacing.sm};
    text-transform: uppercase;

    ${breakpoint('xs', 'md')`
      padding-right: ${spacing.md};
    `}
  `,
};

export const Subtitle = styled.h3.attrs({
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
    }

    div.carousel-cell {
      &:not(.is-selected) {
        opacity: 0.5;
      }
    }

    ${breakpoint('xs', 'md')`
      margin-left: ${spacing.sm};

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
  initialIndex,
  items,
  loading,
  subtitle,
  title,
}) => (
  <DocumentListCarouselWrapper
    className="document-suggestion-carousel"
  >
    <Title>{title}</Title>
    {subtitle && (
      <Subtitle>
        {subtitle}
      </Subtitle>
    )}
    {loading ? (
      <SuggestionCard.Loading />
    ) : (
      <CardCarousel
        cellAlign="left"
        className="document-suggestion-carousel"
        extraOptions={{ initialIndex, slideshow: true, wrapAround: true }}
        items={items}
        gradient={{
          endColor: 'transparent',
          startColor: 'transparent',
        }}
        title={title}
        type="suggestion"
      />
    )}
  </DocumentListCarouselWrapper>
);

DocumentSuggestionCarousel.propTypes = {
  /** Index of the slide to display upon initialization */
  initialIndex: PropTypes.number,
  loading: PropTypes.bool,
  /** List of items for the carousel */
  items: PropTypes.array.isRequired,
  /** Larger title displayed above carousel */
  subtitle: PropTypes.string,
  /** Larger title displayed above carousel */
  title: PropTypes.string.isRequired,
};

DocumentSuggestionCarousel.defaultProps = {
  initialIndex: 0,
  loading: false,
  subtitle: null,
};

export default DocumentSuggestionCarousel;
