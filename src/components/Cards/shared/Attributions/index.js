import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
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

  ${breakpoint('mobile', 'tablet')`
    font-size: 1.2rem;

    & > span {
      display: block;
    }

    .attributions__bullet {
      display: none;
    }
  `}
`;

const StyledLock = styled(Lock)`
  display: inline;
  margin-right: ${spacing.xsm};
  width: 0.8rem;
`;

const StyledCookbook = styled(Cookbook)`
  margin-right: ${spacing.xsm};
  width: 1.6rem;
`;

const Attributions = ({
  className,
  contentType,
  displayLockIcon,
  commentCount,
  displayCommentCount,
}) => (
  <StyledAttributions>
    <div className="attributions__content-type-wrapper">
      { displayLockIcon ? <StyledLock className="lock-icon" fill={`${color.nobel}`} /> : null }
      { contentType === 'Cookbook Collection' ? (
        <StyledCookbook
          className={className}
        />
      ) : null }
      <span>{contentType}</span>
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
};

Attributions.defaultProps = {
  className: '',
  commentCount: null,
  displayCommentCount: false,
  displayLockIcon: false,
};

export default Attributions;
