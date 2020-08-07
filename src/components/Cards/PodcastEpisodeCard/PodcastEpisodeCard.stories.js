import React, { useEffect, useState } from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import fetch from 'cross-fetch';

import PodcastEpisodeCard from './index';

export default {
  title: 'Components|Cards/PodcastEpisodeCard',
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

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://art19.com/images/${episode.cover_image_id || episode.cascaded_cover_image_id}`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/vnd.api+json',
            'Authorization': 'Token token="jQ-ldsLx7USTQ4mjtOEBPIOsEXAno8UTh8l2KomNLQM5B75NUL-P9iFVGd1lF6c9-Lcq1dmUFTmhZTBsb09BmA", credential="14c39803-3e99-47c4-a4d3-d79398e74089"',
          },
          mode: 'no-cors',
        },
      );
      const imageData = await response.json().catch((err) => {
        console.error('REQUEST RESPONSE.JSON PARSING ERROR', url); // eslint-disable-line
        console.error(err); // eslint-disable-line
      });
      const image = imageData.media_assets.filter(image => image.size_height === 640)[0];
      setImageUrl(image.cdn_url);
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
      imageUrl={imageUrl}
      siteKey="atk"
      stickers={[{ type: 'editorial', text: '28:08' }]}
    />
  )
};
