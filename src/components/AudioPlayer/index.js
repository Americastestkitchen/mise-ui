import breakpoint from 'styled-components-breakpoint';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import plyrStyles from './plyrStyles';

import Image from '../Cards/shared/Image';
import utils from '../../lib/utils';
import { Pause, VideoPlay, Rewind, FastForward } from '../DesignTokens/Icon';

import {
  color,
  font,
  fontSize,
  letterSpacing,
  lineHeight,
  mixins,
  spacing,
} from '../../styles';

const PlayerWrapper = styled.div`
  background-color: ${color.charcoal};
  color: ${color.white};
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: ${spacing.md};
  position: relative;
  width: 100%;

  .audio-player {
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  ${breakpoint('lg')`
    padding: ${spacing.lg} 0;
    justify-content: center;

    .audio-player {
      position: relative;
      width: auto;
    }
  `}
`;

const TitleWrapper = styled.div`
  text-align: left;

  ${breakpoint('smmd')`
    width: 27rem;
  `}

  ${breakpoint('lg')`
    margin-left: ${spacing.sm};
    margin-right: ${spacing.xxlg};
    max-width: 20rem;
    width: auto;
  `}
`;

const Title = styled.h2`
  color: ${color.white};
  font: ${fontSize.lg}/${lineHeight.md} ${font.pnb};
  margin-bottom: ${spacing.xxsm};

  ${breakpoint('lg')`
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
  `}
`;

const Subtitle = styled.h4`
  color: ${color.silver};
  font: ${fontSize.xsm}/${lineHeight.sm} ${font.pnb};
  letter-spacing: ${letterSpacing.lg};
  margin-bottom: ${spacing.xsm};
  text-transform: uppercase;

  ${breakpoint('lg')`
    font: 1.2rem/${lineHeight.md} ${font.pnb};
  `}
`;

const ControlsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;

  ${breakpoint('md')` {
    margin-right: ${spacing.lg};
  `}
`;

const PlayButton = styled.button`
  height: 3.5rem;
  margin: 0 ${spacing.sm};
  width: 3.5rem;
`;

const RewindButton = styled.button`
  display: none;
  width: 1.5rem;

  ${breakpoint('smmd')`
    display: block;
  `}
`;

const FastForwardButton = styled.button`
  width: 1.5rem;
`;

const PlyrPlayer = styled.div`
  width: 0;

  ${plyrStyles}

  ${breakpoint('md')`
    position: relative;
    margin: auto ${spacing.xlg} auto 0;
    width: 42.5rem;
  `}
`;

const LinkWrapper = styled.div`
display: none;

  ${breakpoint('smmd')`
    align-items: center;
    display: flex;

    .player__image {
      margin-right: ${spacing.sm};
      overflow: hidden;
      height: 6rem;
      width: 6rem;
    }

    span {
      color: ${color.white};
      font-size: ${fontSize.sm};
      margin-left: -6px;
      margin-right: ${spacing.xsm};
      transform: rotate(90deg);
    }

    a {
      font: ${fontSize.sm} ${font.pnb};
      ${mixins.styledLink(color.turquoise, color.darkerMint)};
    }
  `}
`;

const plyrOptions = { controls: ['progress', 'current-time', 'duration'], invertTime: false, displayDuration: true };

const AudioPlayer = ({
  id,
  title,
  episode,
  imageAlt,
  imageUrl,
  href,
}) => {
  const playerEl = useRef(null);
  const playerInstance = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // update player information when a new episode is selected
  useEffect(() => {
    setIsPlaying(false);
    if (playerInstance.current) {
      playerInstance.current.source = {
        type: 'audio',
        title,
        sources: [
          {
            src: `https://rss.art19.com/episodes/${id}.mp3`,
            type: 'audio/mp3',
          },
        ],
      };
    }
  }, [id, title]);

  // check to see if Plyr has loaded, then create Plyr instance
  const checkPlyr = useCallback(() => {
    if (typeof Plyr !== 'undefined') {
      // eslint-disable-next-line no-undef
      playerInstance.current = new Plyr(playerEl.current, plyrOptions);
      playerInstance.current.source = {
        type: 'audio',
        title,
        sources: [
          {
            src: `https://rss.art19.com/episodes/${id}.mp3`,
            type: 'audio/mp3',
          },
        ],
      };
    } else {
      setTimeout(checkPlyr, 500);
    }
  }, [playerInstance, playerEl, id, title]);

  // destroy player and garbage collect
  useEffect(() => {
    setTimeout(() => {
      utils.loadScriptFile('cdn.plyr.io/3.6.4/plyr.js', false, true, 'footer');
      utils.loadCssFile('https://cdn.plyr.io/3.6.4/plyr.css');
      checkPlyr();
    }, 50);

    return () => {
      if (playerInstance.current?.destroy) {
        playerInstance.current.destroy();
      }
    };
  }, []);

  const togglePlay = () => {
    playerEl.current.plyr.togglePlay(!isPlaying);
    setIsPlaying(!isPlaying);
  };

  const rewind = () => {
    playerEl.current.plyr.rewind(15);
  };

  const forward = () => {
    playerEl.current.plyr.forward(30);
  };

  return (
    <PlayerWrapper
      className="player__wrapper"
    >
      <TitleWrapper>
        {episode && <Subtitle>Episode {episode}</Subtitle>}
        <Title>{title}</Title>
      </TitleWrapper>
      <ControlsWrapper
        className="player__controls"
      >
        <RewindButton
          className="player__button--rewind"
          onClick={rewind}
          type="button"
        >
          <Rewind fill={color.white} />
        </RewindButton>
        <PlayButton
          className="player__play-button"
          onClick={togglePlay.bind(isPlaying)}
        >
          {
            isPlaying ? (
              <Pause fill={color.white} />
            ) : (
              <VideoPlay fill={color.white} />
            )
          }
        </PlayButton>
        <FastForwardButton
          className="player__button--fast-forward"
          onClick={forward}
          type="button"
        >
          <FastForward fill={color.white} />
        </FastForwardButton>
      </ControlsWrapper>
      <PlyrPlayer className="audio-player">
        <audio ref={playerEl}>
          <source src={`https://rss.art19.com/episodes/${id}.mp3`} type="audio/mp3" />
        </audio>
      </PlyrPlayer>
      <LinkWrapper className="player__more-info">
        <div className="player__image">
          <Image
            imageAlt={imageAlt}
            imageUrl={imageUrl}
          />
        </div>
        {
          href && <><span aria-hidden>•••</span><a href={href}>More From This Episode</a></>
        }
      </LinkWrapper>
    </PlayerWrapper>
  );
};

AudioPlayer.propTypes = {
  /** id of the episode */
  id: PropTypes.string.isRequired,
  /** title of the episode */
  title: PropTypes.string.isRequired,
  /** episode number */
  episode: PropTypes.number,
  /** link to page with more episode details */
  href: PropTypes.string,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string,
};

AudioPlayer.defaultProps = {
  episode: null,
  href: '',
  imageAlt: '',
  imageUrl: '',
};

export default React.memo(AudioPlayer);
