import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { color, font, fontSize, letterSpacing, mixins, withThemes } from '../../../styles';
import { getImageUrl } from '../../../lib/cloudinary';
import { md, untilMd, xlg } from '../../../styles/breakpoints';
import { cssThemedColor, cssThemedFontAccentColorAlt, cssThemedLink } from '../../../styles/mixins';

const SidebarCardContainer = styled.aside`
  background-color: ${color.white};
  display: flex;
  flex-direction: row;
  height: 14.5rem;
  width: 100%;

  ${md(css`
    height: 16.1rem;
  `)}

  ${xlg(css`
    flex-direction: column;
    height: auto;
    max-width: 20rem;
  `)}
`;

const SidebarPicture = styled.picture`
  min-height: 14.5rem;
  min-width: 14.5rem;
  max-width: 14.5rem;

  img {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }

  ${md(css`
    min-height: 16.1rem;
    min-width: 16.1rem;
    max-width: 16.1rem;
  `)}

  ${xlg(css`
    min-height: 20rem;
    min-width: 20rem;
    max-width: 20rem;
  `)}
`;

const SidebarTextContent = styled.div`
  flex-direction: column;
  padding: ${({ photo }) => (photo ? '1.4rem 1.5rem;' : '1.4rem 1rem;')};
  min-width: ${({ photo }) => (photo ? '19.6rem;' : '34.1rem;')};

  ${md(css`
    min-width: ${({ photo }) => (photo ? '53.5rem;' : '69.6rem;')};
    padding: 2.1rem;
  `)}

  ${xlg(css`
    min-width: 20rem;
    padding: 1.6rem;
  `)}

  ${withThemes({
    cco: css`
      ${mixins.ccoReviewSetBorder()}
  `,
  })}
`;

const HeadlineType = styled.p`
  font: 1.2rem/1.4rem ${font.pnb};
  letter-spacing: ${letterSpacing.lg};
  margin-bottom: 1.1rem;
  text-transform: uppercase;
  ${cssThemedFontAccentColorAlt}

  ${md(css`
    font: 1.3rem/1.5rem ${font.pnb};
    letter-spacing: 2.08px;
    margin-bottom: 1.3rem;
  `)}

  ${xlg(css`
    font: 1.2rem/1.4rem ${font.pnb};
    letter-spacing: ${letterSpacing.lg};
    margin-bottom: 1.1rem;
  `)}
`;

const SidebarTitle = styled.h3`
  font: ${fontSize.lg}/2.1rem ${font.pnb};
  letter-spacing: normal;
  min-width: 16.8rem;
  ${cssThemedColor}

  ${untilMd(css`${mixins.truncateLineClamp(3)}`)}

  ${md(css`
    letter-spacing: 2.08px;
    margin-bottom: 0.2rem;
  `)}

  ${xlg(css`
    letter-spacing: normal;
    margin-bottom: 0.4rem;
  `)}
`;

const SidebarDescription = styled.span`
  display: none;
  ${cssThemedColor}

  ${md(css`
    font: ${fontSize.md}/2.0rem ${font.pnr};
    margin-bottom: 2rem;
    ${mixins.truncateLineClamp(1)};
  `)}

  ${xlg(css`
    display: block;
    letter-spacing: normal;
    margin-bottom: 0.8rem;
  `)}

`;

const SidebarLink = styled.a`
  font: ${fontSize.md}/2.6rem ${font.mwr};
  font-style: italic;
  font-weight: bold;
  ${cssThemedLink}
  ${cssThemedColor}

  ${xlg(css`
    letter-spacing: normal;
  `)}
`;

const SidebarCard = ({
  altText,
  description,
  photo,
  title,
  type,
  url,
}) => (
  <SidebarCardContainer aria-label={`${title} ${type}`}>
    {photo ? (
      <SidebarPicture>
        <source
          media="(min-width: 1136px)"
          srcSet={getImageUrl(photo, { aspectRatio: '1:1', height: 200, width: 200 })}
        />
        <source
          media="(min-width: 768px)"
          srcSet={getImageUrl(photo, { aspectRatio: '1:1', height: 161, width: 161 })}
        />
        <img
          alt={altText}
          className="sidebar-image"
          crossOrigin="anonymous"
          decoding="async"
          src={getImageUrl(photo, { aspectRatio: '1:1', height: 145, width: 145 })}
        />
      </SidebarPicture>
    ) : null}
    <SidebarTextContent photo={Boolean(photo)}>
      <HeadlineType>{type === 'HowTo' ? 'How to' : type}</HeadlineType>
      <SidebarTitle>{title}</SidebarTitle>
      <SidebarDescription
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <SidebarLink
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        read more
      </SidebarLink>
    </SidebarTextContent>
  </SidebarCardContainer>
);

SidebarCard.propTypes = {
  altText: PropTypes.string.isRequired,
  description: PropTypes.string,
  photo: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

SidebarCard.defaultProps = {
  description: null,
  photo: null,
};

export default SidebarCard;
