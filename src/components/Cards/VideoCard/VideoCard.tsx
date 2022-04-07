import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { font, fontSize } from '../../../styles';
import RelatedRecipeCard, { RelatedRecipeCardProps } from '../RelatedRecipeCard';
import { cssThemedColor, cssThemedLink } from '../../../styles/mixins';
import { md, lg, xlg } from '../../../styles/breakpoints';

// need to confirm whether or not headline should be
// From the episode or Now Playing/Up next depending
// on when active in carousel

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${md(css`
    flex-direction: row;
  `)}
`;

const Description = styled.span`
  font: ${fontSize.md}/2.3rem ${font.pnr};
  margin-bottom: 2rem;

  ${md(css`
    margin-bottom: 0;
    max-width: 34.4rem;
  `)}

  ${lg(css`
    max-width: 48.2rem;
  `)}

  ${xlg(css`
    max-width: 70.4rem;
  `)}

  a {
    ${cssThemedLink}
  }
`;

const EpisodeDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  ${cssThemedColor}
`;

const Headline = styled.span`
  font: ${fontSize.sm}/1.6rem ${font.pnb};
  letter-spacing: 2.24px;
  margin-bottom: 1.2rem;
  margin-top: 0.2rem;
  text-transform: uppercase;
`;

const PlayerWrapper = styled.div`
  margin-bottom: 1.6rem;
`;

const TitleLink = styled.a`
  font: ${fontSize.xl}/2.6rem ${font.pnb};
  margin-bottom: 1rem;
  max-width: fit-content;
  ${cssThemedLink}
`;

export type VideoCardProps = PropsWithChildren<{
  dek: string;
  isActive?: boolean;
  relatedRecipe: RelatedRecipeCardProps;
  title: string;
  slug: string;
}>;

const VideoCard = ({
  children,
  dek,
  isActive = false,
  relatedRecipe,
  title,
  slug,
}: VideoCardProps) => (
  <CardWrapper>
    <PlayerWrapper>
      {children}
    </PlayerWrapper>
    <Content>
      <EpisodeDetails>
        <Headline>{isActive ? 'Now Playing' : 'Up Next'}</Headline>
        <TitleLink href={`/episodes/${slug}`}>{title}</TitleLink>
        <Description dangerouslySetInnerHTML={{ __html: dek }} />
      </EpisodeDetails>
      <RelatedRecipeCard {...relatedRecipe} />
    </Content>
  </CardWrapper>
);

export default VideoCard;
