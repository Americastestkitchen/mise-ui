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
  contentType,
  displayCookbook,
  displayLockIcon,
  commentCount,
  displayCommentCount,
  shopPrices,
}) => (
  <StyledAttributions>
    <div className="attributions__content-type-wrapper">
      { displayLockIcon ? <StyledLock className="lock-icon" fill={`${color.nobel}`} /> : null }
      { contentType === 'Cookbook Collection' || displayCookbook ? (
        <StyledCookbook
          className={className}
        />
      ) : null }
      {!shopPrices ? <span>{contentType}</span> : null}
      {
        shopPrices ? (
          <span>
            {
              shopPrices.salePrice ? (
                <span>
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
    { displayCommentCount && commentCount > 0 ? (
      <>
        <span className="attributions__bullet">•</span>
        <span>{commentCount} {commentCount === 1 ? 'Comment' : 'Comments' }</span>
      </>
    ) : null }
  </StyledAttributions>
);

Attributions.propTypes = {
  className: PropTypes.string,
  commentCount: PropTypes.number,
  contentType: PropTypes.string.isRequired,
  displayLockIcon: PropTypes.bool,
  displayCommentCount: PropTypes.bool,
  displayCookbook: PropTypes.bool,
  shopPrices: PropTypes.object,
};

Attributions.defaultProps = {
  className: '',
  commentCount: null,
  displayCommentCount: false,
  displayCookbook: false,
  displayLockIcon: false,
  shopPrices: null,
};

export default Attributions;
