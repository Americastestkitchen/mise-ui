import React from 'react';
import styled from 'styled-components';
import { color } from '../../../../styles';

const StyledProgressBar = styled.div<{progress: number}>`
  display: none;

  &.in-progress {
    background-color: ${color.silverChalise}; 
    display: block;
    position: relative;
    height: 6px;
    width: 16.5rem;

    &::before {
      background-color: ${color.white};
      content: '';
      display: block;
      height: 6px;
      width: ${({ progress }) => (`calc(${progress} * 100%)`)}
    }
  }
`;

export type ProgressBarProps = {
  progress?: number;
  videoId?: string;
};

const ProgressBar = ({
  progress = 0,
  videoId = '',
}: ProgressBarProps) => (
  <StyledProgressBar
    data-testid={progress === 0 ? '' : 'in-progress'}
    className={`${videoId} progress-bar ${progress === 0 ? '' : 'in-progress'}`}
    progress={progress}
  />
);

export default ProgressBar;
