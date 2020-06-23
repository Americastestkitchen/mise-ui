import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import AudioPlayer from './index';
import LabelFrame from '../LabelFrame';
import PodcastEpisodeCard from '../Cards/PodcastEpisodeCard';

import {
  font,
  fontSize,
  lineHeight,
  spacing,
} from '../../styles';

export default {
  title: 'Components|AudioPlayer',
  component: AudioPlayer,
};

const StyledLabelFrame = styled(LabelFrame)`
  padding: ${spacing.xlg} 0 ${spacing.sm};
  
  h1 {
    font: ${fontSize.lg}/${lineHeight.md} ${font.pnb};
    margin: ${spacing.lg};
  }

  .podcast-episode-card {
    margin: ${spacing.sm} 0;
  }
`;

export const Default = () => {
  /** retrieve information for podcast episode cards */
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://www-staging.americastestkitchen.com/api/v6/podcasts',
        {
          method: 'GET',
        },
      );
      const episodes = await response.json().catch((err) => {
        console.error('REQUEST RESPONSE.JSON PARSING ERROR', url); // eslint-disable-line
        console.error(err); // eslint-disable-line
      });
      setEpisodes(episodes.slice(0, 3).map(({
        episodeID: id,
        title,
        episode,
        slug,
        metaData: {
          description, 
          photo,
        },
      }) => ({
        id,
        title,
        description,
        episode: episode.episodeNumber,
        href: `/${slug}`,
        imageAlt: photo.alt,
        imageUrl: photo.url,
      })));
    }
    fetchData();
  }, []);

  /** set episode to play on audio player */
  const [selectedEpisode, setEpisode] = useState();

  return (
    <>
      <StyledLabelFrame label="Component">
        { selectedEpisode ? (
            <AudioPlayer
              {...selectedEpisode}
            />
          ) : (
          <h1> select an episode to view the player </h1>
          )
        }
      </StyledLabelFrame>
      <StyledLabelFrame label="Supplemental Component">
        {episodes.map(episode => (
          <PodcastEpisodeCard
            key={episode.id}
            siteKey='atk'
            stickers={[{ type: 'editorial', text: '28:08' }]}
            setEpisode={setEpisode}
            {...episode}
          />
        ))}
      </StyledLabelFrame>
    </>
  );
}