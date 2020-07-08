import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import Carousel from '../Carousel';
import FeatureCard from '../../Cards/FeatureCard';
import LinearGradient from '../../DesignTokens/LinearGradient';
import StandardCard from '../../Cards/StandardCard';
import TallCard from '../../Cards/TallCard';
import { cards, spacing, withThemes } from '../../../styles';

const CardCarouselTheme = {
  default: css`
    max-width: 100%;
    position: relative;

    .linear-gradient {
      display: none;
    }

    .carousel {
      ${({ type }) => (type === 'tall' ? 'padding-top: 0; height: 62.8rem;' : '')}
    }
    .carousel-cell {
      height: ${({ type }) => (type === 'tall' ? '60rem' : '40rem')};
      margin-right: ${spacing.sm};
      width: ${cards.standard.width.lg};
    }

    .standard-card {
      width: ${cards.standard.width.lg};
    }

    .carousel-wrapper {
      overflow: visible;
    }

    .linear-gradient {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 4rem;
    }

    ${breakpoint('lg')`
      .linear-gradient {
        display: block;
      }
    `}

    ${breakpoint('xlg')`
      max-width: 115rem;

      .linear-gradient {
        right: -4rem;
      }
    `}
  `,
};

const CardCarouselWrapper = styled.div`
  ${withThemes(CardCarouselTheme)}
`;

const typeMap = {
  feature: FeatureCard,
  standard: StandardCard,
  tall: TallCard,
};

const CardCarousel = ({ className, dotPosition, items, renderItem, type }) => {
  const El = typeMap[type] || StandardCard;
  const defaultRender = item => <El key={item.objectId} {...item} />;
  const doRenderItem = renderItem || defaultRender;

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
      />
      <LinearGradient
        angle="90"
      />
    </CardCarouselWrapper>
  );
};

CardCarousel.propTypes = {
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
  type: PropTypes.oneOf(['standard', 'feature', 'tall']).isRequired,
};

CardCarousel.defaultProps = {
  className: undefined,
  dotPosition: {
    sm: {
      right: spacing.sm,
      top: '0',
    },
    lg: {
      right: spacing.lg,
    },
    xlg: {
      right: spacing.xxlg,
    },
  },
  renderItem: undefined,
};

export default CardCarousel;
