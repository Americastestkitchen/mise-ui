import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import fetch from 'cross-fetch';
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
  }

  p {
    font-size: ${fontSize.md};
    margin-top: ${spacing.sm};
  }

  @media(hover: hover) {
    &:hover {
      transform: translateY(-${spacing.xsm});
      box-shadow: 0 7px 8px -2px ${color.black};
    }
  }

  ${breakpoint('md')`
    max-width: 85rem;
    overflow: auto;
    padding: 0;

    p {
      display: none;
    }
  `}
`;

const ImageWrapper = styled.div`
  position: relative;
  flex-basis: 65%;
  max-height: 10rem;
  max-width: 10rem;
  margin-right: ${spacing.sm};

  ${breakpoint('md')`
    margin-right: 0;
    max-height: none;
    max-width: 23rem;
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

const TextWrapper = styled.div`
  flex-basis: 59%;

  button {
    text-align: left;
  }

  h4 {
    font: 1.2rem/${lineHeight.sm} ${font.pnb};
    color: ${color.silver};
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
  componentDidMount() {
    const { imageId } = this.props;
    fetch(
      `https://art19.com/images/${imageId}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.art19.v0+json;q=0.9,application/json;q=0.8',
          Authorization: 'Token token="jQ-ldsLx7USTQ4mjtOEBPIOsEXAno8UTh8l2KomNLQM5B75NUL-P9iFVGd1lF6c9-Lcq1dmUFTmhZTBsb09BmA", credential="14c39803-3e99-47c4-a4d3-d79398e74089"',
        },
        mode: 'cors',
      },
    )
      .then(response => response.json())
      .then((data) => {
        const image = data.media_assets.filter(image => image.size_height === 640);
        this.imageUrl = image.cdn_url;
      },
      )
      .catch((error) => {
        console.log(error);
      });
  }

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
      imageId,
      siteKey,
      stickers,
    } = this.props;

    return (
      <PodcastEpisodeCardWrapper
        className="podcast-episode-card"
      >
        <div>
          <ImageWrapper>
            <Image
              aria-hidden="true"
              imageAlt={imageAlt}
              imageUrl={this.imageUrl || 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,h_460,q_auto:low,w_460/v1/Proof%20Season%204/04-Pandemic_Exodus_Bagels2'}
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
                imageId,
                siteKey,
                stickers,
              })}
            >
              <h4>Episode {episode} </h4>
              <VideoPlay fill={color.white} />
              <h3>{title}</h3>
            </button>
            <p>{description} </p>
            <span>•••</span><a href={href}>More From This Episode</a>
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
  description: PropTypes.string.isRequired,
  /** episode number */
  episode: PropTypes.number.isRequired,
  /** link of episode detail page */
  href: PropTypes.string.isRequired,
  /** episode id */
  id: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageId: PropTypes.string,
  siteKey: PropTypes.string.isRequired,
  stickers: PropTypes.array,
  setEpisode: PropTypes.func,
};

PodcastEpisodeCard.defaultProps = {
  imageAlt: ' ',
  imageId: '',
  stickers: [],
  setEpisode: null,
};

export default PodcastEpisodeCard;
