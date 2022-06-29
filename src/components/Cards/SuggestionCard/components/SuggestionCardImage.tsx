import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';
import { mixins, spacing } from '../../../../styles';

import Badge from '../../../Badge';

type CardImageProps = {
  imageUrl?: string,
}

export const SuggestionCardImg = styled.a.attrs<CardImageProps>((props => ({
  className: 'suggestion-card__img',
  imageUrl: props.imageUrl || '',
})))<{ imageUrl: string} >`
  ${({ imageUrl }) => (imageUrl ? `
    background: no-repeat center center url("${imageUrl}");
    min-height: 20rem;
  ` : '')}
  background-size: cover;
  display: block;
  overflow: hidden;
  position: relative;
  overflow: visible;
  width: 27.2rem;
  height: 19.9rem;

  &:focus {
    ${mixins.focusIndicator('#3d3d3d', '2px')}
  }

  ${breakpoint('md')`
    flex: 0 0 27.2rem;
    height: 27.2rem;
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
