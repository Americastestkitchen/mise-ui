import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { Title, Subtitle } from '../../../Carousels/DocumentSuggestionCarousel';
import { cards, color, mixins, spacing } from '../../../../styles';
import { getBlankImage } from '../../../../lib/cloudinary';

const StyledLoadingSuggestionWrapper = styled.div`
  h2,
  h3 {
    padding: 0 ${spacing.sm};
  }

  ${breakpoint('md')`
    h2,
    h3 {
      padding: 0;
    }
  `}
`;

const StyledLoadingSuggestionCard = styled.div`
${mixins.loadingGradientAnimation(cards.standard.width.base, color.greySmoke, color.whiteSmoke)}
    background-color: transparent;
    margin: 0 ${spacing.sm} 4.8rem;
    overflow: hidden;

    img {
      display: block;
      min-height: 25rem;
      width: 100%;
    }

    .img-holder {
      background-color: ${color.silver};
    }

    ${breakpoint('md')`
      display: flex;
      margin: 0 0 4.8rem;

      .content-holder {
        flex: 1 0 0;
      }
    `}

    ${breakpoint('md', 'lg')`
      .img-holder {
        flex: 0 0 25rem;
      }
    `}

    ${breakpoint('lg')`
      .img-holder {
        flex: 0 0 41rem;
      }
    `}

    .animated-background {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 30rem;
      height: 100%;

      > div {
        background-color: lightgray;
        margin: ${spacing.sm};
        width: calc(100% - ${spacing.lg});
      }
    }

    .loading-suggestion-card {
      &__mask-1 {
        height: 2rem;
      }

      &__mask-2 {
        height: 1.8rem;
      }

      &__mask-3 {
        height: 5rem;
      }
    }
`;

const LoadingSuggestionCard = ({
  subtitle,
  title,
}) => (
  <StyledLoadingSuggestionWrapper>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <StyledLoadingSuggestionCard
      className="loading-suggestion-card card"
      data-testid="loading-suggestion-card"
    >
      <div className="img-holder">
        <img
          alt=""
          src={getBlankImage('4:3')}
        />
      </div>
      <div className="content-holder">
        <div className="animated-background">
          <div className="loading-suggestion-card__mask-1" />
          <div className="loading-suggestion-card__mask-2" />
          <div className="loading-suggestion-card__mask-3" />
        </div>
      </div>
    </StyledLoadingSuggestionCard>
  </StyledLoadingSuggestionWrapper>
);

LoadingSuggestionCard.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LoadingSuggestionCard;
