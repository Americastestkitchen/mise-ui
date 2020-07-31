import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import PodcastEpisodeCard from './index';

export default {
  title: 'Components|Cards/PodcastEpisodeCard',
  component: PodcastEpisodeCard,
  decorators: [withKnobs],
};

export const Default = () => (
  <PodcastEpisodeCard
    episode={8}
    title={text('Title', 'Exodus Bagels: A Small Business and COVID-19')}
    description={text('Description', 'This is the story of one family, struggling to save their bagel cafe in Boston during the COVID-19 pandemic.')}
    href="https://www.americastestkitchen.com/proof/exodus-bagels-covid-19"
    id="ffbb762f-7b06-41a1-bbd1-95bf1a6d1ff6"
    isPlaying={select('Currently Playing', [true, false], false)}
    imageAlt={text('Image alt', '')}
    imageId={text('Image url', "af10331a-ab7d-4193-80e1-5f4776340af8")}
    siteKey="atk"
    stickers={[{ type: 'editorial', text: '28:08' }]}
  />
);
