import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled from 'styled-components';
import { color, font, fontSize, lineHeight, spacing } from '../../../../styles';
import { Cookbook, Lock } from '../../../DesignTokens/Icon';

const StyledAttributions = styled.div`
  font: ${fontSize.md}/${lineHeight.md} ${font.pnr};
  margin-bottom: ${spacing.xsm};
  text-transform: capitalize;

  & > * {
    margin-right: ${spacing.xsm};
  }

  .attributions__content-type-wrapper {
    display: inline-block;
  }

  ins {
    font: ${fontSize.md}/${lineHeight.md} ${font.pnb};
  }

  ${breakpoint('xs', 'lg')`
    .attributions__bullet {
      display: none;
    }

    .attributions__secondary {
      display: block;
    }
  `}

`;

const StyledLock = styled(Lock)`
  display: inline;
  height: 1rem;
  margin-right: ${spacing.xsm};
  width: 0.8rem;
`;

const StyledCookbook = styled(Cookbook)`
  margin-right: ${spacing.xsm};
  width: 1.6rem;
  height: 1.1rem;
`;

export type ShopPrices = {
  salePrice: string,
  price: string,
}

type AttributionsPropTypes = {
  className?: string,
  displayCookbook?: boolean,
  displayLockIcon?: boolean,
  displaySecondaryAttribution?: boolean,
  primaryAttribution: string,
  secondaryAttribution?: number | string,
  shopPrices?: ShopPrices,
}

export default function Attributions({
  className = '',
  displayCookbook,
  displayLockIcon,
  displaySecondaryAttribution,
  primaryAttribution,
  secondaryAttribution,
  shopPrices,
}: AttributionsPropTypes) {
  return (
    <StyledAttributions>
      <div className="attributions__content-type-wrapper">
        { displayLockIcon ? <StyledLock className="lock-icon" fill={`${color.nobel}`} /> : null }
        { primaryAttribution === 'Cookbook Collection' || displayCookbook ? (
          <StyledCookbook
            className={className}
          />
        ) : null }
        {!shopPrices ? <span>{primaryAttribution}</span> : null}
        {
        shopPrices ? (
          <span>
            {
              shopPrices.salePrice ? (
                <span aria-label={`Was ${shopPrices.price}, now ${shopPrices.salePrice}`}>
                  <ins>
                    {`$${shopPrices.salePrice} `}
                  </ins>
                  <del>
                    {`$${shopPrices.price}`}
                  </del>
                </span>
              ) : `$${shopPrices.price}`
            }
          </span>
        ) : null
      }
      </div>
      { displaySecondaryAttribution && secondaryAttribution ? (
        <>
          <span className="attributions__bullet">•</span>
          <span className="attributions__secondary">{secondaryAttribution}</span>
        </>
      ) : null }
    </StyledAttributions>
  );
}
