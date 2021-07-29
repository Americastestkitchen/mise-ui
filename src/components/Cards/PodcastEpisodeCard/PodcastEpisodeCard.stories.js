import React, { useEffect, useState } from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import fetch from 'cross-fetch';

import PodcastEpisodeCard from './index';

const headers = {
  method: 'GET',
  headers: {
    'Accept': 'application/vnd.api+json',
    'Authorization': 'Token token="jQ-ldsLx7USTQ4mjtOEBPIOsEXAno8UTh8l2KomNLQM5B75NUL-P9iFVGd1lF6c9-Lcq1dmUFTmhZTBsb09BmA", credential="14c39803-3e99-47c4-a4d3-d79398e74089"',
  },
  mode: 'cors',
};

const proxyUrl = 'https://www-staging.americastestkitchen.com/art19';

export default {
  title: 'Components/Cards/PodcastEpisodeCard',
  component: PodcastEpisodeCard,
  decorators: [withKnobs],
};

export const Default = () => {
  const episode = {
    cascaded_cover_image_id: "af10331a-ab7d-4193-80e1-5f4776340af8",
    cover_image_id: null,
    episode_number: 8,
    id: "ffbb762f-7b06-41a1-bbd1-95bf1a6d1ff6",
    rss_link_url: "https://www.americastestkitchen.com/proof/exodus-bagels-covid-19",
    summary: "This is the story of one family, struggling to save their bagel cafe in Boston during the COVID-19 pandemic.",
    title: "Exodus Bagels: A Small Business and COVID-19",
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${proxyUrl}/images/${episode.cover_image_id || episode.cascaded_cover_image_id}`,
          headers,
        );
        const { data: { relationships: { media_assets: { data: assets } } } } = await response.json();
        const assetResponse = await fetch(
          `${proxyUrl}/media_assets/${assets[4].id}`,
          headers,
        );
      } catch (err) {
        console.log('error fetching data', err);
      }
    }
    fetchData();
  }, []);

  return (
    <PodcastEpisodeCard
      episode={episode.episode_number}
      title={text('Title', episode.title)}
      description={text('Description', episode.summary)}
      href={text('Detail Page URL', episode.rss_link_url)}
      id={episode.id}
      isPlaying={select('Currently Playing', [true, false], false)}
      imageAlt={text('Image alt', '')}
      imageUrl={text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1599584414/play-listen/twi-testttt_ghdfud.png')}
      siteKey="atk"
      stickers={[{ type: 'editorial', text: '28:08' }]}
    />
  )
};
