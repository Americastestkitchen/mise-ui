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

  ${breakpoint('md')`
    position: relative;
    background-color: transparent;
  `}

  .grow-div {
    float: left;
    transition: 0.2s all ease-in-out;
    z-index: -1;

    ${breakpoint('md')`
      float: none;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: ${color.asphalt};
    `}
  }

  @media(hover:hover) {
    &:hover .grow-div {
      background-color: ${color.jet};
      box-shadow: 0 7px 8px -2px ${color.black};
      transform: scale(1.05);
    }
  }

  &.is-playing .grow-div {
    background-color: ${color.jet};
    box-shadow: 0 7px 8px -2px ${color.black};
    transform: scale(1.05);
  }

  > div {
    display: flex;
    max-height: 20rem;
  }

  p {
    clear: both;
    color: ${color.whiteSmoke};
    font-size: ${fontSize.md};
  }

  ${breakpoint('md')`
    max-width: 84.8rem;
    padding: 0;

    p {
      display: none;
    }
  `}

  .place-hold {
    display: none;

    ${breakpoint('md')`
      display: block;
      flex-basis: 23rem;
      flex-shrink: 0;
      max-width: 23rem;
      margin-right: ${spacing.sm};
    `}
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  flex-basis: 10rem;
  flex-shrink: 0;
  max-height: 10rem;
  max-width: 10rem;
  margin-bottom: ${spacing.sm};
  margin-right: ${spacing.sm};
  overflow: hidden;

  ${breakpoint('md')`
    margin-bottom: 0;
    margin-right: 0;
    flex-basis: 23rem;
    max-height: none;
    max-width: 23rem;
  `}
`;

export const StyledBadge = styled(Badge)`
  position: absolute;
  top: ${spacing.xsm};
  left: ${spacing.xsm};

  ${breakpoint('xs', 'md')`
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
    display: inline-flex;
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
  flex: 1;

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
    color: ${color.whiteSmoke};
    font: ${fontSize.md} ${font.pnb};
    margin-top: ${spacing.xsm};
    margin-bottom: ${spacing.sm};
    line-height: ${lineHeight.md};
  }

  span {
    color: ${color.whiteSmoke};
    display: inline-block;
    font-size: ${fontSize.sm};
    margin-left: -6px;
    transform: rotate(90deg);
  }

  a {
    color: ${color.whiteSmoke};
    font: ${fontSize.sm} ${font.pnb};
    ${mixins.styledLink(color.turquoise, color.darkerMint)};
  }

  ${breakpoint('md')`
    flex-basis: auto;
    margin: 0;
    padding: ${spacing.sm} ${spacing.xlg} ${spacing.sm} ${spacing.md};

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
      color: ${color.whiteSmoke};
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
      id,
      imageAlt,
      imageUrl,
      siteKey,
      stickers,
      isPlaying,
    } = this.props;

    return (
      <PodcastEpisodeCardWrapper
        id={id}
        className={`podcast-episode-card ${isPlaying ? 'is-playing' : ''}`}
      >
        <div className="grow-div">
          <ImageWrapper className="podcast-episode-card__image">
            <Image
              aria-hidden="true"
              imageAlt={imageAlt}
              imageUrl={imageUrl}
            />
          </ImageWrapper>
        </div>
        <div>
          <div className="place-hold">
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
          </div>
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
  imageAlt: '',
  imageUrl: '',
  isPlaying: false,
  stickers: [],
  setEpisode: null,
};

export default React.memo(PodcastEpisodeCard);
