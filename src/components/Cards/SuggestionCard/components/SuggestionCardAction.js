import styled from 'styled-components';

import { color, spacing } from '../../../../styles';

const SuggestionCardAction = styled.button.attrs({
  className: 'suggestion-card__button',
})`
  align-items: center;
  display: flex;
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

    @media(hover: hover) {
      &:hover {
        background-color: ${color.eclipse};
        border: 1px solid ${color.eclipse};
        color: ${color.white};
  
        svg g {
          stroke: ${color.white};
        }
      }
    }
  }

  &.favorite-action {
    background-color: ${color.mint};
    border: 1px solid ${color.mint};
    color: ${color.white};

    @media(hover: hover) {
      &:hover {
        background-color: ${color.darkerMint};
        border: 1px solid ${color.darkerMint};
      }
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

export default SuggestionCardAction;
