import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import fetch from 'cross-fetch';

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
        'https://art19.com/episodes?calendar_meta=true&page=1&per_page=10&rss=true&series_id=7f86ce08-696b-4741-a8fc-dbbd0cb3cee1',
        {
          method: 'GET',
          headers: {
            'Accept': 'application/vnd.art19.v0+json;q=0.9,application/json;q=0.8',
            'Authorization': 'Token token="jQ-ldsLx7USTQ4mjtOEBPIOsEXAno8UTh8l2KomNLQM5B75NUL-P9iFVGd1lF6c9-Lcq1dmUFTmhZTBsb09BmA", credential="14c39803-3e99-47c4-a4d3-d79398e74089"',
          },
          mode: 'cors',
        },
      );
      const episodes = await response.json().catch((err) => {
        console.error('REQUEST RESPONSE.JSON PARSING ERROR', url); // eslint-disable-line
        console.error(err); // eslint-disable-line
      });
      console.log(episodes.episodes);
      setEpisodes(episodes.episodes.filter(ep => ep.itunes_type !== 'bonus').slice(0, 3).map(({
        id,
        title,
        episode_number,
        summary,
        cascaded_cover_image_id,
        rss_link_url,
      }) => ({
        id,
        title: title,
        description: summary,
        episode: episode_number,
        href: rss_link_url,
        imageUrl: `https://content.production.cdn.art19.com/images/af/10/33/1a/${cascaded_cover_image_id}/ca6ecdfece537fcd8f435cf9270a14050a09232f6b3df167cae73630623a60d3e72152309a442726188fc0b72add32466bec60c27b83262073d781d430c12ae0.jpeg`,
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