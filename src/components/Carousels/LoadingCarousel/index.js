import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, spacing, withThemes } from '../../../styles';
import LoadingCard from '../../Cards/LoadingCard';

const LoadingCarouselTheme = {
  default: css`

    .intro {
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
        background-color: ${color.black};
        width: 24rem;
      }

      .dots {
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
        flex-shrink: 0;

        &:not(:first-child) {
          display: none;
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
  className,
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
        <LoadingCard className={className} type={type} />
        <LoadingCard className={className} type={type} />
        <LoadingCard className={className} type={type} />
        <LoadingCard className={className} type={type} />
        { title && ctaText && (
          <div className="card-peek" />
        )}
      </div>
    </div>
  </StyledLoadingCarousel>
);

LoadingCarousel.propTypes = {
  className: PropTypes.string,
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
  className: '',
  ctaText: null,
  intro: null,
  title: null,
};

export default LoadingCarousel;
