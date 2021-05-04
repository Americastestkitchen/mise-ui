import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Image from '../shared/Image';
import { color, font, fontSize, letterSpacing, mixins } from '../../../styles';
import { getImageUrl } from '../../../lib/cloudinary';

const SidebarCardContainer = styled.aside`
  background-color: ${color.white};
  display: flex;
  flex-direction: row;
  height: 14.1rem;
  width: calc(100% - 3.4rem);

  ${breakpoint('md')`
    height: 16.1rem;
    width: calc(100% - 7.2rem);
  `}

  ${breakpoint('xlg')`
    flex-direction: column;
    height: auto;
    width: 20rem;
  `}
`;

const SidebarTextContent = styled.div`
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
`;

const HeadlineType = styled.p`
  color: ${color.darkTeal};
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
`;

const SidebarTitle = styled.h2`
  color: ${color.eclipse};
  font: ${fontSize.lg}/2.1rem ${font.pnb};
  letter-spacing: ${letterSpacing.lg};

  ${breakpoint('md')`
    letter-spacing: 2.08px;
    margin-bottom: 0.2rem;
  `}

  ${breakpoint('xlg')`
    letter-spacing: normal;
    margin-bottom: 0.4rem;
  `}
`;

const SidebarDescription = styled.span`
  color: ${color.eclipse};
  display: none;

  ${breakpoint('md')`
    font: ${fontSize.md}/2.0rem ${font.pnr};
    margin-bottom: 1rem;
    ${mixins.truncateLineClamp(1)};
  `}

  ${breakpoint('xlg')`
    display: block;
    letter-spacing: normal;
    margin-bottom: 0.8rem;
  `}
`;

const SidebarLink = styled.a`
  color: ${color.eclipse};
  font: ${fontSize.md}/2.6rem ${font.mwr};
  font-style: italic;
  font-weight: bold;
  ${mixins.styledLink(color.morningGlory, color.white)};

  ${breakpoint('xlg')`
    letter-spacing: normal;
  `}
`;

const imageSizing = {
  desktop: 200,
  tablet: 161,
  mobile: 145,
};

const SidebarCard = ({
  altText,
  description,
  deviceType,
  lazy,
  photo,
  title,
  type,
  url,
}) => (
  <SidebarCardContainer>
    {photo ? (
      <Image
        className="sidebar-image"
        imageAlt={altText}
        imageUrl={getImageUrl(photo, { aspectRatio: '1:1', height: imageSizing[deviceType] })}
        lazy={lazy}
      />
    ) : null}
    <SidebarTextContent photo={Boolean(photo)}>
      <HeadlineType>{type === 'HowTo' ? 'How to' : type}</HeadlineType>
      <SidebarTitle>{title}</SidebarTitle>
      <SidebarDescription>{description}</SidebarDescription>
      <SidebarLink href={url}>read more</SidebarLink>
    </SidebarTextContent>
  </SidebarCardContainer>
);

SidebarCard.propTypes = {
  altText: PropTypes.string.isRequired,
  description: PropTypes.string,
  deviceType: PropTypes.string,
  lazy: PropTypes.bool,
  photo: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

SidebarCard.defaultProps = {
  description: null,
  deviceType: 'desktop',
  lazy: false,
  photo: null,
};

export default SidebarCard;
