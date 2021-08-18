import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Badge from '../../Badge';
import { FavoriteRibbon } from '../../DesignTokens/Icon';
import { color, font, fontSize, lineHeight, spacing } from '../../../styles';
import { Close } from '../../DesignTokens/Icon/svgs';

const SuggestionCardWrapper = styled.div.attrs({
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
  ${({ imageUrl }) => (imageUrl ? `
    background: no-repeat center center url("${imageUrl}");
  ` : '')}
  background-size: cover;
  overflow: hidden;
  position: relative;
  width: 100%;

  img {
    display: block;
    max-width: 100%;
    min-height: 100%;
    width: auto;
  }

  ${breakpoint('md', 'lg')`
    flex: 0 0 25rem;

    img {
      margin-left: -50%;
    }
  `}

  ${breakpoint('md')`
    img {
      position: absolute;
      max-height: 100%;
      max-width: none;
    }
  `}

  ${breakpoint('lg')`
    flex: 0 0 41rem;

    img {
      max-height: none;
      margin-top: -50%;
      min-width: 100%;
    }
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

export const SuggestionCardTitle = styled.a.attrs({
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

export const SuggestionCardDek = styled.div.attrs({
  className: 'suggestion-card__dek',
})`
  margin-bottom: ${spacing.sm};
`;

const SuggestionCardActions = styled.div.attrs({
  className: 'suggestion-card__buttons',
})`

  button {
    font: 700 ${fontSize.sm}/1.64 ${font.msr};
    white-space: nowrap;
  }

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

  &.favorite-action {
    background-color: ${color.mint};
    border: 1px solid ${color.mint};
    color: ${color.white};

    &:hover {
      background-color: ${color.darkerMint};
      border: 1px solid ${color.darkerMint};
    }

    &:not(.favorited) {
      svg {
        .favorite-ribbon__ribbon {
          display: none;
        }
      }
    }

    &.favorited {
      [class*="vertical-line"],
      [class*="horizontal-line"] {
        stroke: white;
      }
    }
  }
`;

const SuggestionCard = ({
  dek,
  href,
  imageUrl,
  objectId,
  siteKey,
  subtitle,
  title,
}) => (
  <SuggestionCardWrapper
    data-document-title={title}
    data-href={href}
    data-object-id={objectId}
  >
    <SuggestionCardImg
      data-testid="suggestion-img"
      imageUrl={imageUrl}
    >
      <SuggestionCardBadge
        type={siteKey}
      />
    </SuggestionCardImg>
    <SuggestionCardContent>
      <SuggestionCardTitle
        data-testid="suggestion-title"
        href={href}
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
      {dek && (
        <SuggestionCardDek
          data-testid="suggestion-dek"
          dangerouslySetInnerHTML={{
            __html: dek,
          }}
        />
      )}
      <SuggestionCardActions>
        <SuggestionCardAction
          className="skip remove-cell"
          data-testid="suggestion-action__skip"
        >
          <Close
            ariaHidden
            ariaLabel=" "
            fill={color.eclipse}
          />
          Not for me
        </SuggestionCardAction>
        <SuggestionCardAction
          className="favorite-action"
          data-document-title={title}
          data-favoritable-id={objectId}
          data-origin-site={siteKey}
          data-testid="suggestion-action__favorite"
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
  </SuggestionCardWrapper>
);

SuggestionCard.propTypes = {
  dek: PropTypes.string,
  href: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  objectId: PropTypes.string.isRequired,
  siteKey: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

SuggestionCard.defaultProps = {
  dek: null,
  imageUrl: null,
  subtitle: null,
};

export default SuggestionCard;
