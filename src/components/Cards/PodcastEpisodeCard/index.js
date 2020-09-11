import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, spacing, lineHeight, letterSpacing, mixins } from '../../../styles';

import { VideoPlay } from '../../DesignTokens/Icon';

import Badge from '../../Badge';
import Sticker from '../shared/Sticker';
import Image from '../shared/Image';

const PodcastEpisodeCardWrapper = styled.div`
  background-color: ${color.asphalt};
  color: ${color.whiteSmoke};
  font: ${fontSize.md}/${lineHeight.md} ${font.pnr};
  padding: ${spacing.sm} ${spacing.md};

  > div {
    display: flex;
    overflow: hidden;
    max-height: 24rem;
  }

  p {
    font-size: ${fontSize.md};
    margin-top: ${spacing.sm};
  }

  &.is-playing {
    box-shadow: 0 5px 8px 0 ${color.transparentBlack};
    background-color: ${color.black};
    max-width: 93rem;

    .podcast-episode-card__image {
      flex-basis: 80%;
      margin-left: 1rem;
      max-width: 25rem;
    }
  }

  @media(hover: hover) {
    &:hover {
      transform: translateY(-${spacing.xsm});
      box-shadow: 0 7px 8px -2px ${color.black};
      max-width: 93rem;
    }
  }

  ${breakpoint('md')`
    max-width: 85rem;
    overflow: auto;
    padding: 0;

    p {
      display: none;
    }

    @media(hover: hover) {
      &:hover {
        .podcast-episode-card__image {
          flex-basis: 90%;
          margin-left: 1rem;
          max-width: 25rem;
        }
      }
    }
  `}
`;

const ImageWrapper = styled.div`
  position: relative;
  flex-basis: 88%;
  max-height: 10rem;
  max-width: 10rem;
  margin-right: ${spacing.sm};
  overflow: hidden;

  ${breakpoint('md')`
    margin-right: 0;
    max-height: none;
    max-width: 25rem;
  `}
`;

export const StyledBadge = styled(Badge)`
  position: absolute;
  top: ${spacing.xsm};
  left: ${spacing.xsm};

  ${breakpoint('xs', 'lg')`
    width: 1.6rem;
    height: 1.6rem;
  `}
`;

const stickerHeightMobile = '1.2rem';
export const StyledSticker = styled(Sticker)`
  bottom: 0;
  left: 0;
  position: absolute;

  ${breakpoint('xs', 'lg')`
    border-radius: 0.5rem;
    line-height: ${stickerHeightMobile};
    height: ${stickerHeightMobile};
    font-size: ${fontSize.xxsm};
  `}
`;

const NowPlayingSticker = styled(Sticker)`
  &.now-playing {
    background-color: ${color.darkerMint};
    margin: 0 0.5rem 0 0;
    transform: none;
  }

  &.now-playing > * {
    font-size: ${fontSize.xsm};
    margin-left: 0;
    transform: none;
  }
`;

const TextWrapper = styled.div`
  flex-basis: 59%;

  button {
    text-align: left;
    width: 100%;
  }

  h4 {
    align-items: center;
    color: ${color.silver};
    display: flex;
    font: 1.2rem/${lineHeight.sm} ${font.pnb};
    letter-spacing: ${letterSpacing.lg};
    text-transform: uppercase;
  }

  p {
    display: none;
  }

  svg {
    height: 2rem;
    width: 2rem;
    margin: 7px 5px 0 0;
    clip-path: circle();
    shape-outside: circle(50% at 50% 50%);
    float: left;
  }

  h3 {
    font: ${fontSize.md} ${font.pnb};
    margin-top: ${spacing.xsm};
    margin-bottom: ${spacing.sm};
    line-height: ${lineHeight.md};
  }

  span {
    color: ${color.white};
    display: inline-block;
    font-size: ${fontSize.sm};
    margin-left: -6px;
    transform: rotate(90deg);
  }

  a {
    font: ${fontSize.sm} ${font.pnb};
    ${mixins.styledLink(color.turquoise, color.darkerMint)};
  }

  ${breakpoint('md')`
    flex-basis: auto;
    margin: auto 0;
    padding: ${spacing.sm} ${spacing.xlg};

    h4 {
      margin-bottom: ${spacing.sm};
    }

    svg {
      margin: 3px 5px 0 0;
    }

    h3 {
      align-items: center;
      display: flex;
      font-size: ${fontSize.xl};
      margin-top: ${spacing.sm};
      margin-bottom: 0;

      svg {
        margin-right: ${spacing.xsm};
      }
    }

    p {
      display: block;
      margin-top: ${spacing.md};
      margin-bottom: ${spacing.sm};
    }
  `}
`;

class PodcastEpisodeCard extends Component {
  setEpisode = (episode) => {
    const { setEpisode } = this.props;
    setEpisode(episode); // call method
  };

  render() {
    const {
      episode,
      title,
      description,
      href,
      cardId,
      id,
      imageAlt,
      imageUrl,
      siteKey,
      stickers,
      isPlaying,
    } = this.props;

    return (
      <PodcastEpisodeCardWrapper
        id={cardId}
        className={`podcast-episode-card ${isPlaying ? 'is-playing' : ''}`}
      >
        <div>
          <ImageWrapper className="podcast-episode-card__image">
            <Image
              aria-hidden="true"
              imageAlt={imageAlt}
              imageUrl={imageUrl}
            />
            <StyledBadge
              type={siteKey}
            />
            {stickers.map(({ text, type }) => (
              <StyledSticker
                key={text}
                contentType="episode"
                type={type}
                text={text}
              />
            ))}
          </ImageWrapper>
          <TextWrapper>
            <button
              type="button"
              onClick={this.setEpisode.bind(this, {
                episode,
                title,
                description,
                href,
                id,
                imageAlt,
                imageUrl,
                siteKey,
                stickers,
              })}
            >
              <h4>
                {
                  isPlaying && (
                    <NowPlayingSticker
                      className="now-playing"
                      type="editorial"
                      text="now playing"
                    />
                  )
                }
                {
                  episode ? `Episode ${episode}` : ''
                }
              </h4>
              <VideoPlay fill={color.white} />
              <h3>{title}</h3>
            </button>
            <p>{description} </p>
            {href && <> <span>•••</span><a href={href}>More From This Episode</a></>}
          </TextWrapper>
        </div>
        <p>{description} </p>
      </PodcastEpisodeCardWrapper>
    );
  }
}

PodcastEpisodeCard.propTypes = {
  /** title of the episode */
  title: PropTypes.string.isRequired,
  /** short description of episode */
  description: PropTypes.string,
  /** episode number */
  episode: PropTypes.number,
  /** link of episode detail page */
  href: PropTypes.string,
  /** episode id */
  id: PropTypes.string.isRequired,
  /** id for jump link */
  cardId: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string,
  siteKey: PropTypes.string.isRequired,
  stickers: PropTypes.array,
  setEpisode: PropTypes.func,
};

PodcastEpisodeCard.defaultProps = {
  description: '',
  episode: null,
  href: '',
  imageAlt: ' ',
  imageUrl: '',
  isPlaying: false,
  stickers: [],
  setEpisode: null,
};

export default React.memo(PodcastEpisodeCard);
