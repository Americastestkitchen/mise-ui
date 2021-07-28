import React, { useState } from 'react';
import styled from 'styled-components';

import HeroCard from './index';
import AudioPlayer from '../../AudioPlayer';
import { getImageUrl } from '../../../lib/cloudinary';

export default {
  title: 'Components/Cards/HeroCard',
  component: HeroCard,
};

export const Watch = () => (
  <HeroCard
    backgroundCloudinaryId="mise-play/Image_3x.png"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor ipsum a dictum ultrices."
    iconKey="atk"
    ctaUrl="www.americastestkitchen.com"
    ctaText="Watch the Latest Episode"
  />
);

export const Learn = () => (
  <HeroCard
    backgroundCloudinaryId="mise-play/Image_3x.png"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor ipsum a dictum ultrices."
    ctaUrl="www.americastestkitchen.com"
    ctaText="Start Learning"
    personHeadShot={{
      imgCloudinaryId: 'mise-play/Image_21_3x.png',
    }}
    sticker={{
      contentType: 'video',
      text: '4 videos',
      type: 'editorial',
    }}
  />
);
const ListenWrapper = styled.div`
  .hero-card {
    margin-bottom: 5rem;
  }
`;
export const Listen = () => {
  const episode = {
    cascaded_cover_image_id: "af10331a-ab7d-4193-80e1-5f4776340af8",
    cover_image_id: null,
    episode: 8,
    id: "ffbb762f-7b06-41a1-bbd1-95bf1a6d1ff6",
    rss_link_url: "https://www.americastestkitchen.com/proof/exodus-bagels-covid-19",
    summary: "Biscuit wars, rebellion-by-Oreo, and the \"Real\" Mr. Oreo: In this collaboration with Business Insider’s Brought To You By, we take a closer look at the many layers of history behind America’s favorite cookie.",
    title: "Exodus Bagels: A Small Business and COVID-19",
    imageUrl: getImageUrl('play-listen/proof-s3e8-vertical', { width: 250, height: 400, crop: 'fill', gravity: 'face:center'})
  }

  const [selectedEpisode, setEpisode] = useState(null);
  
  const onClick = (episode) => {
    setEpisode(episode);
  }

  return (
    <ListenWrapper>
      <HeroCard
        backgroundCloudinaryId="play-listen/proof-s3e8-vertical.png"
        description={episode.summary}
        ctaText="Listen to the Latest Episode"
        onClick={onClick.bind(this, episode)}
      />
      { 
        selectedEpisode && (
          <AudioPlayer
            {...selectedEpisode}
          />
        )
      }
    </ListenWrapper>
  )
};
