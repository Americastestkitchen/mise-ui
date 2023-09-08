import React, { PropsWithChildren, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { font, fontSize } from '../../../styles';
import { cssThemedColor, cssThemedLink, withThemes } from '../../../styles/mixins';
import { md, lg, xlg } from '../../../styles/breakpoints';
import { InferStyledTypes } from '../../../styles/utility-types';

// need to confirm whether or not headline should be
// From the episode or Now Playing/Up next depending
// on when active in carousel

const cssThemedHeadlineFont = withThemes({
  default: css`
    font-family: ${font.pnb};
  `,
  cco: css`
    font-family: ${font.clb};
  `,
});

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
    /* stretch affects accessibility of stretched anchor tag */
    align-items: flex-start;
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
  margin-bottom: 1rem;
  // a tag is flexed and underline needs wrapping
  //  inline element; otherwise underline appears
  //  under content box instead of text baseline. 
  //  setting inline not sufficient.
  span {
    ${cssThemedHeadlineFont}
    ${cssThemedLink}
    line-height: 26px;
    font-size: 23px;
  }
`;

export type VideoCardProps = PropsWithChildren<{
  headline: string;
  title: string;
  description: string;
  titleLinkProps: InferStyledTypes<typeof TitleLink>;
  cardSlot?: ReactNode;
}>;

const VideoCard = ({
  children,
  description,
  headline,
  title,
  titleLinkProps,
  cardSlot,
}: VideoCardProps) => (
  <CardWrapper data-testid="video-card">
    <PlayerWrapper>
      {children}
    </PlayerWrapper>
    <Content>
      <EpisodeDetails>
        <Headline>{headline}</Headline>
        <TitleLink {...titleLinkProps}>
          <span>{title}</span>
        </TitleLink>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </EpisodeDetails>
      {cardSlot}
    </Content>
  </CardWrapper>
);

export default VideoCard;
