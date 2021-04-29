import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import Carousel from '../Carousel';
import CategoryCard from '../../Cards/CategoryCard';
import FeatureCard from '../../Cards/FeatureCard';
import HeroCard from '../../Cards/HeroCard';
import LinearGradient from '../../DesignTokens/LinearGradient';
import PersonCard from '../../Cards/PersonCard';
import ReviewableSummaryCard from '../../Cards/ReviewableSummaryCard';
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
    category: '7.4rem',
  },
  md: {
    hero: 'calc(100% - 6.4rem)',
  },
  lg: {
    category: '9.5rem',
    hero: '113.6rem',
  },
};

const carouselTypeStyles = {
  tall: 'padding-top: 0; height: 62.8rem;',
  category: 'padding-top: 0; height: 14rem;',
};

const CardCarouselTheme = {
  default: css`
    max-width: 100%;
    position: relative;

    .flickity-page-dots {
      display: ${({ type }) => (type === 'category' ? 'none' : '')};
      height: 1.2rem;
      width: auto;
    }

    .flickity-button.previous {
      display: ${({ type }) => (type === 'category' ? 'none' : '')}
    }

    .linear-gradient {
      display: none;
    }

    .carousel {
      ${({ type }) => (carouselTypeStyles[type] || '')};
    }

    .carousel-cell {
      margin-right: ${({ type }) => (type === 'category' ? '0.85rem' : `${spacing.sm}`)};
      width: ${({ type }) => (typeWidths?.sm?.[type] || typeWidths.default[type] || typeWidths.default.default)};
    }

    .standard-card {
      width: ${cards.standard.width.lg};
    }

    .category {
      width: 90rem;
    }

    .carousel-wrapper {
      overflow: visible;
    }

    ${breakpoint('xs', 'md')`
      &:not(.card-carousel--hero) {
        .flickity-page-dots {
          display: none;
        }
      }
    `}

    ${breakpoint('md')`
      .carousel-cell {
        margin-right: ${({ type }) => (type === 'category' ? '0.5rem' : spacing.sm)};
      }
    `}

    ${breakpoint('lg')`
      .linear-gradient {
        display: block;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        width: 10rem;
        z-index: 1;

        &.left {
          left: 0;
        }
      }

      .carousel-cell {
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

        &.next {
          top: ${({ type }) => (type === 'category' ? '6rem' : '')};
          right: ${({ type }) => (type === 'category' ? '.7rem' : '')};
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
            right: -3rem;
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
  category: CategoryCard,
  feature: FeatureCard,
  hero: HeroCard,
  person: PersonCard,
  reviewable: ReviewableSummaryCard,
  standard: StandardCard,
  tall: TallCard,
};

const CardCarousel = ({
  cellAlign,
  className,
  dotPosition,
  extraOptions,
  items,
  gradient,
  renderItem,
  title,
  type,
}) => {
  const El = typeMap[type] || StandardCard;
  const defaultRender = item => <El key={item.objectId} {...item} />;
  const doRenderItem = renderItem || defaultRender;
  const options = {
    slideshow: false,
    cellAlign,
    wrapAround: true,
    ...extraOptions,
  };
  if (type === 'hero') {
    options.slideshow = true;
  }

  return (
    <CardCarouselWrapper
      aria-label={`${title} carousel`}
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
        {...gradient}
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
  gradient: PropTypes.shape({
    endColor: PropTypes.string,
    startColor: PropTypes.string,
  }),
  extraOptions: PropTypes.object,
  /** Callback for rendering each carousel item */
  renderItem: PropTypes.func,
  title: PropTypes.string,
  /** Sets the carousel-item styles for a particular card style */
  type: PropTypes.oneOf([
    'category',
    'feature',
    'hero',
    'person',
    'reviewable',
    'standard',
    'tall',
  ]).isRequired,
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
  gradient: null,
  extraOptions: null,
  renderItem: undefined,
  title: '',
};

export default CardCarousel;
