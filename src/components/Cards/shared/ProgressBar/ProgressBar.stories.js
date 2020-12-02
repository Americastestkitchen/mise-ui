import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import ProgressBar from './index';

export default {
  title: 'Components|Cards/shared/ProgessBar',
  component: ProgressBar,
  decorators: [withKnobs],
};

export const Default = () => (
  <ProgressBar
    progress={text('Progress (timeWatched/totalLength)', '0.5')}
    videoId="episode_666"
  />
)