import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, spacing } from '../../../styles';
import LoadingCard from '../../Cards/LoadingCard';

const StyledLoadingCarousel = styled.div`
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
      max-width: 115rem;

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
`;

const LoadingCarousel = ({
  ctaText,
  intro,
  title,
  type,
  count,
}) => {
  const cards = Array(count).fill(<LoadingCard type={type} />);
  return (
    <StyledLoadingCarousel className="loading-carousel">
      {intro && (<div className="intro" />) }
      { title && ctaText && (
        <div className={`text-and-dots ${type}`}>
          <div className="title-and-cta" />
          <div className="dots" />
        </div>
      )}
      <div className="card-carousel">
        <div className="cards">
          {cards}
          { title && ctaText && (
            <div className="card-peek" />
          )}
        </div>
      </div>
    </StyledLoadingCarousel>
  );
};

LoadingCarousel.propTypes = {
  /** Text displayed on CTA. */
  ctaText: PropTypes.string,
  /** Smaller intro text displayed above subtitle */
  intro: PropTypes.string,
  /** Larger title displayed above carousel */
  title: PropTypes.string,
  /** Sets the carousel-item styles for a particular card style */
  type: PropTypes.oneOf([
    'category',
    'feature',
    'person',
    'reviewable',
    'standard',
    'tall',
    'related-small',
    'related-recipe',
    'suggestion',
  ]).isRequired,
  count: PropTypes.number,
};

LoadingCarousel.defaultProps = {
  ctaText: null,
  intro: null,
  title: null,
  count: 4,
};

export default LoadingCarousel;
