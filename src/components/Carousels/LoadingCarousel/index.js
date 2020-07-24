import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { cards, color, mixins, spacing, withThemes } from '../../../styles';
import LoadingCard from '../../Cards/LoadingCard';

const LoadingCarouselTheme = {
  default: css`

    .intro {
      ${mixins.loadingGradientAnimation('22rem')};
      background-color: ${color.black};
      height: 2.1rem;
      margin-bottom: ${spacing.sm};
      width: 22rem;

      ${breakpoint('md')`
        width: 32.6rem;
      `}
    }

    .text-and-dots {
      display: flex;
      height: 2.1rem;
      justify-content: space-between;
      margin: 0 0 ${spacing.xsm};
      width: 100%;

      .title-and-cta {
        ${mixins.loadingGradientAnimation('24rem', color.black)};
        background-color: ${color.black};
        width: 24rem;
      }

      .dots {
        ${mixins.loadingGradientAnimation('5.1rem', color.black)};
        background-color: ${color.black};
        width: 5.1rem;
      }

      ${breakpoint('md')`
        width: 115rem;

        .title-and-cta {
          width: 61.2rem;
        }
      `}
    }

    .card-carousel {
      display: flex;
      flex-direction: column;
      max-width: 100%;

      .cards {
        display: flex;
      }

      .card {
        &:not(:first-child) {
          display: none;
        }

        &.standard-card {
          flex-shrink: 0;
        }
      }

      ${breakpoint('md')`
        .card {
          margin-right: ${spacing.sm};

          &:not(:first-child) {
            display: block;
          }
        }

        .card-peek {
            background-color: black;
            width: 4rem;
          }
      `}
    }
  `,

  dark: css`
  `,

  light: css`
    .intro {
      background-color: ${color.silver};
    }

    .text-and-dots {
      .title-and-cta {
        background-color: ${color.silver};
      }

      .dots {
        background-color: ${color.silver};
      }
  `,

};

const StyledLoadingCarousel = styled.div`
  ${withThemes(LoadingCarouselTheme)}
`;

const LoadingCarousel = ({
  ctaText,
  intro,
  title,
  type,
}) => (
  <StyledLoadingCarousel>
    {intro && (<div className="intro" />) }
    { title && ctaText && (
      <div className={`text-and-dots ${type}`}>
        <div className="title-and-cta" />
        <div className="dots" />
      </div>
    )}
    <div className="card-carousel">
      <div className="cards">
        <LoadingCard type={type} />
        <LoadingCard type={type} />
        <LoadingCard type={type} />
        <LoadingCard type={type} />
        { title && ctaText && (
          <div className="card-peek" />
        )}
      </div>
    </div>
  </StyledLoadingCarousel>
);

LoadingCarousel.propTypes = {
  /** Text displayed on CTA. */
  ctaText: PropTypes.string,
  /** Smaller intro text displayed above subtitle */
  intro: PropTypes.string,
  /** Larger title displayed above carousel */
  title: PropTypes.string,
  /** Sets the carousel-item styles for a particular card style */
  type: PropTypes.oneOf(['standard', 'feature', 'tall']).isRequired,
};

LoadingCarousel.defaultProps = {
  ctaText: null,
  intro: null,
  title: null,
};

export default LoadingCarousel;
