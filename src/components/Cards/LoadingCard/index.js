import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { cards, color, mixins, spacing, withThemes } from '../../../styles';

const StyledLoadingCardTheme = {
  default: css`
    overflow: hidden;

    &.standard-card {
      ${mixins.loadingGradientAnimation(cards.standard.width.base)}
      background-color: transparent;
      height: 21.8rem;
      padding-bottom: ${spacing.sm};
      width: ${cards.standard.width.base};

      .standard-card {
        &__mask-1 {
          background-color: transparent;
          height: ${cards.standard.width.base};
        }

        &__mask-2 {
          height: ${spacing.xsm};
          margin: 0 0 ${spacing.sm} 0;
          position: relative;
        }

        &__mask-3 {
          height: ${spacing.xsm};
          margin-left: auto;
          position: relative;

          &::after {
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
        ${mixins.loadingGradientAnimation(cards.standard.width.lg)}
        height: 34.4rem;
        width: ${cards.standard.width.lg};

        .standard-card {
          &__mask-1 {
            height: ${cards.standard.width.lg};
          }

          &__mask-3 {
            height: ${spacing.sm};
            margin-left: auto;
            position: relative;

            &::after {
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
      width: ${cards.queue.width.base};

      .queue-card {
        &__mask-1 {
          background-color: transparent;
          height: 15.6rem;
        }

        &__mask-2 {
          height: ${spacing.xsm};
          position: relative;

          &::after {
            content: '';
            height: 1rem;
            position: absolute;
            right: 0;
            top: ${spacing.xsm};
            width: 40%;
          }
        }

        &__mask-3 {
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
  `,

  dark: css`
    .standard-card {
      &__mask-2,
      &__mask-3,
      &__mask-3::after {
        background-color: ${color.nero};
      }
    }

    .queue-card {
      &__mask-2,
      &__mask-2::after,
      &__mask-3 {
        background-color: ${color.nero};
      }
    }
  `,

  light: css`
    &.standard-card {
      ${mixins.loadingGradientAnimation(cards.standard.width.base, color.silver, color.nobel)};

      .standard-card {
        &__mask-2,
        &__mask-3,
        &__mask-3::after {
          background-color: ${color.whiteSmoke};
        }
      }
    }

    &.queue-card {
      ${mixins.loadingGradientAnimation(cards.queue.width.base, color.silver, color.nobel)};

      .queue-card {
        &__mask-2,
        &__mask-2::after,
        &__mask-3 {
          background-color: ${color.whiteSmoke};
        }
      }
    }

    &.feature-card {
      ${mixins.loadingGradientAnimation(cards.feature.width.base, color.silver, color.nobel)};
    }

    &.feature-wide-card {
      ${mixins.loadingGradientAnimation(cards.featureWide.width.base, color.silver, color.nobel)};
    }

    &.hero-card {
      ${mixins.loadingGradientAnimation(cards.hero.width.lg, color.silver, color.nobel)};
    }

    &.podcast-episode-card {
      ${mixins.loadingGradientAnimation(cards.audioListable.width.lg, color.silver, color.nobel)};
    }

    &.person-card {
      ${mixins.loadingGradientAnimation(cards.person.width.base, color.silver, color.nobel)};
    }

    &.tall-card {
      ${mixins.loadingGradientAnimation(cards.tall.width.base, color.silver, color.nobel)};
    }

    &.tall-wide-card {
      ${mixins.loadingGradientAnimation(cards.tallWide.width.base, color.silver, color.nobel)};

      ${breakpoint('md')`
        ${mixins.loadingGradientAnimation(cards.tallWide.width.lg, color.silver, color.nobel)};
      `}
    }
  `,
};

const StyledLoadingCard = styled.div`
  ${withThemes(StyledLoadingCardTheme)}
`;

const LoadingCard = ({ type }) => (
  <StyledLoadingCard className={`${type}-card card`}>
    <div className="animated-background">
      {
        (type === 'standard' || type === 'queue') && (
          <>
            <div className={`${type}-card__mask-1`} />
            <div className={`${type}-card__mask-2`} />
            <div className={`${type}-card__mask-3`} />
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
