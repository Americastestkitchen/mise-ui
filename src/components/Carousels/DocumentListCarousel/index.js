import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import CardCarousel from '../CardCarousel';
import { color, font, fontSize, letterSpacing, lineHeight, spacing, withThemes } from '../../../styles';

const IntroTheme = {
  default: css`
    font: italic ${fontSize.md}/1.31 ${font.mwr};
    margin-right: ${spacing.sm};
    padding-bottom: ${spacing.sm};

    ${breakpoint('lg')`
      line-height: 1;
    `}
  `,
  dark: css``,
};

const Intro = styled.h4.attrs({
  className: 'document-list-carousel__intro',
})`${withThemes(IntroTheme)}`;

const TitleTheme = {
  default: css`
    font: ${fontSize.xl}/1 ${font.pnb};
    padding: 0 0 ${spacing.xsm};
    margin-right: ${spacing.md};

    ${breakpoint('md')`
      font-size: ${fontSize.xxl};
      margin-right: ${spacing.xlg};
    `}
  `,
  dark: css``,
};

const Title = styled.h2.attrs({
  className: 'document-list-carousel__title',
})`${withThemes(TitleTheme)}`;

const CtaTheme = {
  default: css`
    font: ${fontSize.sm}/${lineHeight.lg} ${font.pnr};
    letter-spacing: 2.2px;
    text-transform: uppercase;

    &:hover {
      color: ${color.mint};
    }

    ${breakpoint('md')`
      font-size: ${fontSize.md};
      letter-spacing: ${letterSpacing.cta};
    `}
  `,
  dark: css`
    &:hover {
      color: ${color.silver};
    }
  `,
};

const Cta = styled.a.attrs({
  className: 'document-list-carousel__cta',
})`${withThemes(CtaTheme)}`;

const TitleAndCtaTheme = {
  default: css`
    display: flex;
    flex-direction: column;

    ${breakpoint('md')`
      align-items: center;
      flex-direction: row;
    `}
  `,
  dark: css``,
};

const TitleAndCta = styled.div.attrs({
  className: 'title-wrapper',
})`
  ${withThemes(TitleAndCtaTheme)}
`;

const DocumentListCarouselTheme = {
  default: css`
    color: ${color.eclipse};

    .carousel {
      padding-top: 0.6rem;
    }
  `,
  dark: css`
    color: ${color.white};

    .flickity-page-dots {
      .dot {
        display: none;
      }
    }

    ${breakpoint('md')`
      .flickity-page-dots {
        .dot {
          display: inline-block;
        }
      }
    `}

    ${breakpoint('lg')`
      .flickity-page-dots {
        right: 4.4rem;
      }
    `}
  `,
};

const DocumentListCarouselWrapper = styled.div`
  ${withThemes(DocumentListCarouselTheme)}
`;

/**
 * The `DocumentListCarousel` presents a Carousel along with several
 * text elements, providing context for the inclue document cards.
 *
 * ## Parameters
 *
 * **Title** (required): The large text above the carousel
 *
 * **Subtitle** (optional): Text located directly above the carousel and below the title.
 *
 * **Intro** (optional): Text located above the title
 */
const DocumentListCarousel = ({
  cellAlign,
  ctaTarget,
  ctaText,
  ctaUrl,
  intro,
  items,
  gradient,
  options,
  renderItem,
  title,
  type,
}) => (
  <DocumentListCarouselWrapper
    className="document-list-carousel"
  >
    {intro && (<Intro>{intro}</Intro>)}
    <TitleAndCta>
      <Title>{title}</Title>
      {ctaText && ctaUrl && (
        <Cta
          href={ctaUrl}
          target={ctaTarget}
        >
          {`${ctaText} >`}
        </Cta>
      )}
    </TitleAndCta>
    <CardCarousel
      cellAlign={cellAlign}
      extraOptions={options}
      items={items}
      gradient={gradient}
      renderItem={renderItem}
      type={type}
    />
  </DocumentListCarouselWrapper>
);

DocumentListCarousel.propTypes = {
  /** Carousel cell alignment */
  cellAlign: PropTypes.oneOf(['center', 'left']),
  /** Specify where link should be opened */
  ctaTarget: PropTypes.string,
  /** Text displayed on CTA. */
  ctaText: PropTypes.string,
  /** Url value for CTA */
  ctaUrl: PropTypes.string,
  /** Smaller intro text displayed above subtitle */
  intro: PropTypes.string,
  /** List of items for the carousel */
  items: PropTypes.array.isRequired,
  gradient: PropTypes.shape({
    endColor: PropTypes.string,
    startColor: PropTypes.string,
  }),
  options: PropTypes.object,
  /** Optional: override default render function in CardCarousel */
  renderItem: PropTypes.func,
  /** Larger title displayed above carousel */
  title: PropTypes.string.isRequired,
  /** Sets the carousel-item styles for a particular card style */
  type: PropTypes.oneOf([
    'feature',
    'person',
    'reviewable',
    'standard',
    'tall',
  ]).isRequired,
};

DocumentListCarousel.defaultProps = {
  cellAlign: null,
  ctaText: null,
  ctaTarget: '',
  ctaUrl: null,
  intro: null,
  gradient: null,
  options: null,
  renderItem: null,
};

export default DocumentListCarousel;
