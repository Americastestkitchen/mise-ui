import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Badge from '../../Badge';
import Image from '../shared/Image';
import { FavoriteRibbon } from '../../DesignTokens/Icon';
import { color, font, fontSize, lineHeight, spacing } from '../../../styles';
import { Close } from '../../DesignTokens/Icon/svgs';

const SuggestionCardLink = styled.a.attrs({
  className: 'suggestion-card',
})`
  background: ${color.whiteSmoke};
  display: block;
  min-height: 30rem;

  ${breakpoint('md')`
    display: flex;
  `}
`;

export const SuggestionCardImg = styled.div.attrs({
  className: 'suggestion-card__img',
})`
  overflow: hidden;
  position: relative;
  width: 100%;

  .no-image & {
    background: transparent;
    display: flex;
    align-items: center;
    margin-bottom: ${spacing.xxsm};
  }

  img {
    display: block;
    max-width: 100%;
    min-height: 100%;
    width: auto;
  }

  ${breakpoint('md', 'lg')`
    flex: 0 0 25rem;

    img {
      position: absolute;
      margin-left: -50%;
      max-height: 100%;
      max-width: none;
    }
  `}

  ${breakpoint('lg')`
    flex: 0 0 41rem;
  `}
`;

export const SuggestionCardBadge = styled(Badge)`
  position: absolute;
  top: ${spacing.xsm};
  left: ${spacing.xsm};

  .no-image & {
    position: relative;
    top: 0;
    left: 0;
  }

  ${breakpoint('xs', 'md')`
    width: 1.6rem;
    height: 1.6rem;
  `}
`;

export const SuggestionCardContent = styled.div.attrs({
  className: 'suggestion-card__content',
})`
  font: ${fontSize.sm}/1.43 ${font.mwr};
  padding: ${spacing.sm};

  ${breakpoint('lg')`
    align-self: center;
    padding-right: 4.2rem;
  `}
`;

export const SuggestionCardTitle = styled.p.attrs({
  className: 'suggestion-card__title',
})`
  font: 700 ${fontSize.md}/${lineHeight.md} ${font.msr};
  margin-bottom: ${spacing.xsm};
`;

export const SuggestionCardSubTitle = styled.span.attrs({
  className: 'suggestion-card__sub-title',
})`
  display: block;
  font-style: italic;
  margin-bottom: ${spacing.xsm};
`;

export const SuggestionCardDescription = styled.p.attrs({
  className: 'suggestion-card__description',
})`
  margin-bottom: ${spacing.sm};
`;

const SuggestionCardActions = styled.div.attrs({
  className: 'suggestion-card__buttons',
})`
  font-family: ${font.msr};
  font-weight: bold;

  ${breakpoint('md', 'lg')`
    flex-direction: column;
  `}
`;

export const SuggestionCardAction = styled.button.attrs({
  className: 'suggestion-card__buttons',
})`
  align-items: center;
  display: inline-flex;
  height: 4rem;
  justify-content: center;
  vertical-align: middle;
  width: calc(50% - ${spacing.xsm});

  &:first-child {
    margin-right: ${spacing.sm};
  }

  svg {
    margin-right: ${spacing.xsm};

    &.close {
      height: 1.2rem;
      width: 1.2rem;
    }
  }

  &.skip {
    background-color: ${color.white};
    border: 1px solid ${color.suvaGray};
    color: ${color.eclipse};

    &:hover {
      background-color: ${color.eclipse};
      border: 1px solid ${color.eclipse};
      color: ${color.white};

      svg g {
        stroke: ${color.white};
      }
    }
  }

  &.favorite {
    background-color: ${color.mint};
    border: 1px solid ${color.mint};
    color: ${color.white};

    &:hover {
      background-color: ${color.darkerMint};
      border: 1px solid ${color.darkerMint};
    }
  }
`;

const SuggestionCard = ({
  description,
  href,
  imageAlt,
  imageUrl,
  objectId,
  onFavoriteClick,
  onSkipClick,
  siteKey,
  subtitle,
  title,
}) => (
  <SuggestionCardLink
    href={href}
  >
    <SuggestionCardImg
      data-testid="suggestion-img"
    >
      { imageUrl ? (
        <Image
          aria-hidden="true"
          imageAlt={imageAlt}
          imageUrl={imageUrl}
        />
      ) : null }
      <SuggestionCardBadge
        type={siteKey}
      />
    </SuggestionCardImg>
    <SuggestionCardContent>
      <SuggestionCardTitle
        data-testid="suggestion-title"
      >
        {title}
      </SuggestionCardTitle>
      {subtitle && (
        <SuggestionCardSubTitle
          data-testid="suggestion-sub-title"
        >
          {subtitle}
        </SuggestionCardSubTitle>
      )}
      {description && (
        <SuggestionCardDescription
          data-testid="suggestion-description"
        >
          {description}
        </SuggestionCardDescription>
      )}
      <SuggestionCardActions>
        <SuggestionCardAction
          className="skip"
          data-testid="suggestion-action__skip"
          onClick={(evt) => {
            evt.preventDefault();
            onSkipClick();
          }}
        >
          <Close
            ariaHidden
            ariaLabel=" "
            fill={color.eclipse}
          />
          Not for me
        </SuggestionCardAction>
        <SuggestionCardAction
          className="favorite"
          data-document-title={title}
          data-favoritable-id={objectId}
          data-origin-site={siteKey}
          data-testid="suggestion-action__favorite"
          onClick={(evt) => {
            evt.preventDefault();
            onFavoriteClick();
          }}
        >
          <FavoriteRibbon
            ariaHidden
            ariaLabel=" "
            className="favorite-ribbon"
            fill={color.white}
          />
          I like it, save it
        </SuggestionCardAction>
      </SuggestionCardActions>
    </SuggestionCardContent>
  </SuggestionCardLink>
);

SuggestionCard.propTypes = {
  description: PropTypes.string,
  href: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string,
  objectId: PropTypes.string.isRequired,
  onSkipClick: PropTypes.func.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
  siteKey: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

SuggestionCard.defaultProps = {
  description: null,
  imageAlt: null,
  imageUrl: null,
  subtitle: null,
};

export default SuggestionCard;
