import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

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
    imageAlt={text('Image alt', '')}
    imageUrl={text('Image url', "https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,h_460,q_auto:low,w_460/v1/Proof%20Season%204/04-Pandemic_Exodus_Bagels2")}
    siteKey="atk"
    stickers={[{ type: 'editorial', text: '28:08' }]}
  />
);
