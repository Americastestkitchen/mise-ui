import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../../../../styles';

const StyledProgressBar = styled.div`
  display: none;

  &.in-progress {
    background-color: #b1b1b1;
    display: block;
    position: relative;
    height: 6px;
    width: 16.5rem;
    
    &::before {
      background-color: ${color.white};
      content: '';
      display: block;
      height: 6px;
      width: ${({ progress }) => (`calc(${progress} * 100%);`)}
    }
  }
`;

const ProgressBar = ({
  progress,
  videoId,
}) => (
  <StyledProgressBar
    data-testid={`${progress === 0 ? '' : 'in-progress'}`}
    className={`${videoId} progress-bar ${progress === 0 ? '' : 'in-progress'}`}
    progress={progress}
  />
);

ProgressBar.propTypes = {
  progress: PropTypes.number,
  videoId: PropTypes.string.isRequired,
};

ProgressBar.defaultProps = {
  progress: 0,
};

export default ProgressBar;
