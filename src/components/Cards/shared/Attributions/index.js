import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import PropTypes from 'prop-types';
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
    font: 700 (${fontSize.md}/${lineHeight.md} )${font.pnb};
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

const Attributions = ({
  className,
  displayCookbook,
  displayLockIcon,
  displaySecondaryAttribution,
  primaryAttribution,
  secondaryAttribution,
  shopPrices,
}) => (
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

Attributions.propTypes = {
  className: PropTypes.string,
  displayLockIcon: PropTypes.bool,
  displaySecondaryAttribution: PropTypes.bool,
  displayCookbook: PropTypes.bool,
  primaryAttribution: PropTypes.string.isRequired,
  secondaryAttribution: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  shopPrices: PropTypes.object,
};

Attributions.defaultProps = {
  className: '',
  displaySecondaryAttribution: false,
  displayCookbook: false,
  displayLockIcon: false,
  secondaryAttribution: null,
  shopPrices: null,
};

export default Attributions;
