import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import Carousel from '../Carousel';
import FeatureCard from '../../Cards/FeatureCard';
import HeroCard from '../../Cards/HeroCard';
import LinearGradient from '../../DesignTokens/LinearGradient';
import PersonCard from '../../Cards/PersonCard';
import StandardCard from '../../Cards/StandardCard';
import TallCard from '../../Cards/TallCard';
import { cards, spacing, withThemes } from '../../../styles';

const typeWidths = {
  default: {
    hero: '100%',
    default: cards.standard.width.lg,
  },
  sm: {
    hero: '100%',
  },
  md: {
    hero: 'calc(100% - 6.4rem)',
  },
  lg: {
    hero: '113.6rem',
  },
};

const typeHeights = {
  default: {
    hero: '46.5rem',
    tall: '60rem',
    person: '27.2rem',
    default: '41rem',
  },
};

const carouselTypeStyles = {
  tall: 'padding-top: 0; height: 62.8rem;',
};

const CardCarouselTheme = {
  default: css`
    max-width: 100%;
    position: relative;

    .flickity-page-dots {
      height: 1.2rem;
      width: auto;
    }

    .linear-gradient {
      display: none;
    }

    .carousel {
      ${({ type }) => (carouselTypeStyles[type] || '')};
    }

    .carousel-cell {
      height: ${({ type }) => (typeHeights?.sm?.[type] || typeHeights.default[type] || typeHeights.default.default)};
      margin-right: ${spacing.sm};
      width: ${({ type }) => (typeWidths?.sm?.[type] || typeWidths.default[type] || typeWidths.default.default)};
    }

    .standard-card {
      width: ${cards.standard.width.lg};
    }

    .carousel-wrapper {
      overflow: visible;
    }

    .flickity-enabled ~ .linear-gradient {
      display: block;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 4rem;
      z-index: 1;

      &.left {
        left: 0;
      }
    }

    ${breakpoint('xs', 'md')`
      &:not(.card-carousel--hero) {
        .flickity-page-dots {
          display: none;
        }
      }
    `}

    ${breakpoint('lg')`
      .linear-gradient {
        display: block;
      }

      .carousel-cell {
        height: ${({ type }) => (typeHeights?.lg?.[type] || typeHeights.default[type] || typeHeights.default.default)};
        width: ${({ type }) => (typeWidths?.lg?.[type] || typeWidths.default[type] || typeWidths.default.default)};
      }

      &.card-carousel--hero {
        .linear-gradient {
          &.right {
            right: 0;
          }
        }
      }

      &.card-carousel--standard {
        .flickity-prev-next-button {
          top: 11.4rem; /* vertically centered within image */
          transform: none;
        }
      }

      .flickity-button {
        &:hover {
          svg {
            transform: scale(1.2);
            opacity: 0.6;
          }
        }
      }
    `}

    ${breakpoint('xlg')`
      max-width: 115rem;

      .linear-gradient {
        &:last-child {
          right: -5rem;
        }
      }

      &.card-carousel--hero {
        .linear-gradient {
          &:last-child {
            right: -4rem;
          }
        }
      }
    `}
  `,
};

const CardCarouselWrapper = styled.div`
  ${withThemes(CardCarouselTheme)}
`;

const typeMap = {
  feature: FeatureCard,
  hero: HeroCard,
  person: PersonCard,
  standard: StandardCard,
  tall: TallCard,
};

const CardCarousel = ({
  cellAlign,
  className,
  dotPosition,
  items,
  renderItem,
  type,
}) => {
  const El = typeMap[type] || StandardCard;
  const defaultRender = item => <El key={item.objectId} {...item} />;
  const doRenderItem = renderItem || defaultRender;
  const options = {
    slideshow: false,
    cellAlign,
    wrapAround: true,
  };
  if (type === 'hero') {
    options.slideshow = true;
  }

  return (
    <CardCarouselWrapper
      className={`card-carousel card-carousel--${type}`}
      data-testid={`card-carousel--${type}`}
      type={type}
    >
      <Carousel
        className={className}
        dotPosition={dotPosition}
        items={items}
        renderItem={doRenderItem}
        options={options}
      />
      {cellAlign === 'center' && (
        <LinearGradient
          angle="-90"
          position="left"
        />
      )}
      <LinearGradient
        angle="90"
        position="right"
      />
    </CardCarouselWrapper>
  );
};

CardCarousel.propTypes = {
  cellAlign: PropTypes.oneOf(['center', 'left']),
  /** Additional classname */
  className: PropTypes.string,
  dotPosition: PropTypes.shape({
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    top: PropTypes.string,
  }),
  /** List of items for the carousel */
  items: PropTypes.array.isRequired,
  /** Callback for rendering each carousel item */
  renderItem: PropTypes.func,
  /** Sets the carousel-item styles for a particular card style */
  type: PropTypes.oneOf(['standard', 'feature', 'person', 'tall', 'hero']).isRequired,
};

CardCarousel.defaultProps = {
  cellAlign: 'center',
  className: undefined,
  dotPosition: {
    sm: {
      right: spacing.sm,
      top: '0',
    },
    md: {
      right: spacing.sm,
      top: `-${spacing.md}`,
    },
    lg: {
      right: spacing.lg,
      top: `-${spacing.md}`,
    },
    xlg: {
      right: spacing.xxlg,
      top: `-${spacing.md}`,
    },
  },
  renderItem: undefined,
};

export default CardCarousel;
