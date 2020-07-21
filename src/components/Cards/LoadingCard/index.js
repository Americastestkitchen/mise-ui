import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { cards, color, mixins, spacing } from '../../../styles';

const StyledLoadingCard = styled.div`
  ${mixins.loadingGradientAnimation(cards.standard.width.base)};
  overflow: hidden;

  &.standard-card {
    background-color: transparent;
    height: 21.8rem;
    padding-bottom: ${spacing.sm};
    width: ${cards.standard.width.base};

    .standard-card {
      &__image {
        background-color: transparent;
        height: ${cards.standard.width.base};
      }

      &__title {
        background-color: ${color.nero};
        height: ${spacing.xsm};
        margin: 0 0 ${spacing.sm} 0;
        position: relative;
      }

      &__cta {
        background-color: ${color.nero};
        height: ${spacing.xsm};
        margin-left: auto;
        position: relative;

        &::after {
          background-color: ${color.nero};
          content: '';
          height: ${spacing.xsm};
          position: absolute;
          right: 0;
          top: ${spacing.xsm};
          width: 36%;
        }
      }
    }

    ${breakpoint('lg')`
      ${mixins.loadingGradientAnimation(cards.standard.width.lg)};
      height: 34.4rem;
      width: ${cards.standard.width.lg};

      .standard-card {
        &__image {
          height: ${cards.standard.width.lg};
        }

        &__cta {
          height: ${spacing.sm};
          margin-left: auto;
          position: relative;

          &::after {
            background-color: ${color.nero};
            height: ${spacing.sm};
            top: ${spacing.sm};
          }
        }
      }
    `}
  }

  &.queue-card {
    ${mixins.loadingGradientAnimation(cards.queue.width.base)};
    background-color: transparent;
    height: 19.8rem;
    overflow: hidden;
    width: ${cards.queue.width.base};

    .queue-card {
      &__image {
        background-color: transparent;
        height: 15.6rem;
      }

      &__title {
        background-color: ${color.nero};
        height: ${spacing.xsm};
        position: relative;

        &::after {
          background-color: ${color.nero};
          content: '';
          height: 1rem;
          position: absolute;
          right: 0;
          top: ${spacing.xsm};
          width: 40%;
        }
      }

      &__cta {
        background-color: ${color.nero};
        height: ${spacing.xsm};
        margin-top: 1rem;
        position: relative;

        &::after {
          background-color: transparent;
          content: '';
          height: ${spacing.sm};
          position: absolute;
          top: ${spacing.xsm};
          width: 100%;
        }
      }
    }
  }

  &.feature-card {
    ${mixins.loadingGradientAnimation(cards.feature.width.base)};
    height: 40rem;
    width: ${cards.feature.width.base};

    ${breakpoint('lg')`
      height: 40rem;
      width: ${cards.feature.width.base};
    `}
  }

  &.feature-wide-card {
    ${mixins.loadingGradientAnimation(cards.featureWide.width.base)};
    height: 33rem;
    width: ${cards.featureWide.width.base};

    ${breakpoint('lg')`
      ${mixins.loadingGradientAnimation(cards.featureWide.width.lg)};
      height: 40rem;
      width: ${cards.featureWide.width.lg};
    `}
  }

  &.hero-card {
    ${mixins.loadingGradientAnimation(cards.hero.width.lg)};
    height: 46.9rem;
    width: 100%;
  }

  &.podcast-episode-card {
    ${mixins.loadingGradientAnimation(cards.audioListable.width.lg)};
    height: 20rem;
    width: ${cards.audioListable.width.lg};
  }

  &.person-card {
    ${mixins.loadingGradientAnimation(cards.person.width.base)};
    height: ${cards.person.width.base};
    width: ${cards.person.width.base};
  }

  &.tall-card {
    ${mixins.loadingGradientAnimation(cards.tall.width.base)};
    height: 60rem;
    width: ${cards.tall.width.base};

    ${breakpoint('md')`
      width: ${cards.tall.width.base};
    `}
  }

  &.tall-wide-card {
    ${mixins.loadingGradientAnimation(cards.tallWide.width.base)};
    height: 60rem;
    width: ${cards.tallWide.width.base};

    ${breakpoint('md')`
      ${mixins.loadingGradientAnimation(cards.tallWide.width.lg)};
      width: ${cards.tallWide.width.lg};
    `}
  }
`;

const LoadingCard = ({ type }) => (
  <StyledLoadingCard className={`${type}-card card`}>
    <div className="animated-background">
      {
        (type === 'standard' || type === 'queue') && (
          <>
            <div className={`${type}-card__image`} />
            <div className={`${type}-card__title`} />
            <div className={`${type}-card__cta`} />
          </>
        )
      }
    </div>
  </StyledLoadingCard>
);

LoadingCard.propTypes = {
  type: PropTypes.oneOf(['standard', 'feature', 'feature-wide', 'hero', 'tall', 'tall-wide', 'queue', 'person', 'podcast-episode']).isRequired,
};

export default LoadingCard;
