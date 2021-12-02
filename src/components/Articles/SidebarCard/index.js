import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { color, font, fontSize, letterSpacing, mixins, withThemes } from '../../../styles';
import { getImageUrl } from '../../../lib/cloudinary';

const SidebarCardContainer = styled.aside`
  background-color: ${color.white};
  display: flex;
  flex-direction: row;
  height: 14.5rem;
  width: 100%;

  ${breakpoint('md')`
    height: 16.1rem;
  `}

  ${breakpoint('xlg')`
    flex-direction: column;
    height: auto;
    max-width: 20rem;
  `}

  picture {
    min-height: 14.5rem;
    min-width: 14.5rem;
    max-width: 14.5rem;

    img {
      display: block;
      max-height: 100%;
      max-width: 100%;
    }

    ${breakpoint('md')`
      min-height: 16.1rem;
      min-width: 16.1rem;
      max-width: 16.1rem;
    `}

    ${breakpoint('xlg')`
      min-height: 20rem;
      min-width: 20rem;
      max-width: 20rem;
    `}
  }
`;

const SidebarTextContentTheme = {
  default: css`
    flex-direction: column;
    padding: ${({ photo }) => (photo ? '1.4rem 1.5rem;' : '1.4rem 1rem;')};
    min-width: ${({ photo }) => (photo ? '19.6rem;' : '34.1rem;')};

    ${breakpoint('md')`
      min-width: ${({ photo }) => (photo ? '53.5rem;' : '69.6rem;')};
      padding: 2.1rem;
    `}

    ${breakpoint('xlg')`
      min-width: 20rem;
      padding: 1.6rem;
    `}
  `,
  cco: css`
    ${mixins.ccoReviewSetBorder()}
  `,
};

const SidebarTextContent = styled.div`
  ${withThemes(SidebarTextContentTheme)}
`;

const HeadlineTypeTheme = {
  default: css`
    font: 1.2rem/1.4rem ${font.pnb};
    letter-spacing: ${letterSpacing.lg};
    margin-bottom: 1.1rem;
    text-transform: uppercase;

    ${breakpoint('md')`
      font: 1.3rem/1.5rem ${font.pnb};
      letter-spacing: 2.08px;
      margin-bottom: 1.3rem;
    `}

    ${breakpoint('xlg')`
      font: 1.2rem/1.4rem ${font.pnb};
      letter-spacing: ${letterSpacing.lg};
      margin-bottom: 1.1rem;
    `}
  `,
  atk: css`
    color: ${color.darkTeal};
  `,
  cco: css`
    color: ${color.darkTeal};
  `,
  cio: css`
    color: ${color.squirrel};
  `,
};

const HeadlineType = styled.p`
  ${withThemes(HeadlineTypeTheme)}
`;

const SidebarTitleTheme = {
  default: css`
    font: ${fontSize.lg}/2.1rem ${font.pnb};
    letter-spacing: normal;
    min-width: 16.8rem;

    ${breakpoint('md')`
      letter-spacing: 2.08px;
      margin-bottom: 0.2rem;
    `}

    ${breakpoint('xlg')`
      letter-spacing: normal;
      margin-bottom: 0.4rem;
    `}
  `,
  atk: css`
    color: ${color.eclipse};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const SidebarTitle = styled.h3`
  ${withThemes(SidebarTitleTheme)}
`;

const SidebarDescriptionTheme = {
  default: css`
    display: none;

    ${breakpoint('md')`
      font: ${fontSize.md}/2.0rem ${font.pnr};
      margin-bottom: 2rem;
      ${mixins.truncateLineClamp(1)};
    `}

    ${breakpoint('xlg')`
      display: block;
      letter-spacing: normal;
      margin-bottom: 0.8rem;
    `}
  `,
  atk: css`
    color: ${color.eclipse};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const SidebarDescription = styled.span`
  ${withThemes(SidebarDescriptionTheme)}
`;

const SidebarLinkTheme = {
  default: css`
    font: ${fontSize.md}/2.6rem ${font.mwr};
    font-style: italic;
    font-weight: bold;

    ${breakpoint('xlg')`
      letter-spacing: normal;
    `}
  `,
  atk: css`
    color: ${color.eclipse};
    ${mixins.styledLink(color.turquoise, color.seaSalt)}
  `,
  cco: css`
    color: ${color.black};
    ${mixins.styledLink(color.malibu, color.cornflower)}
  `,
  cio: css`
    color: ${color.cork};
    ${mixins.styledLink(color.dijon, color.sand)}
  `,
};

const SidebarLink = styled.a`
  ${withThemes(SidebarLinkTheme)}
`;

const SidebarCard = ({
  altText,
  description,
  photo,
  title,
  type,
  url,
}) => (
  <SidebarCardContainer>
    {photo ? (
      <picture>
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
      </picture>
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
