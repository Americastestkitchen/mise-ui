import React from 'react';
import styled, { css } from 'styled-components';
import { md } from '../../../styles/breakpoints';

import PersonHeadShot, { PersonHeadshotPropTypes } from '../shared/PersonHeadShot/PersonHeadShot';
import { color, font, fontSize, grid, lineHeight, mixins, spacing } from '../../../styles';

const MediaObjectCardWrapper = styled.section`
  max-width: 100%;
  width: 100%;

  ${md(css`
    max-width: ${grid.columnWidth};
    width: ${grid.columnWidth};
  `)}
`;

const MediaObjectCardHeading = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${spacing.sm};

  .person-head-shot {
    margin-right: ${spacing.sm};
  }
`;

const MediaObjectCardPersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const MediaObjectCardName = styled.h2`
  color: ${color.eclipse};
  font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
  margin-bottom: ${spacing.xsm};
`;

const MediaObjectCardTitle = styled.h3`
  color: ${color.nobel};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
`;

const MediaObjectCardDescription = styled.div`
  font: ${fontSize.md}/${lineHeight.lg} ${font.pnr};
  margin-bottom: ${spacing.xsm};
`;

const MediaObjectCardCta = styled.a`
  font: ${fontSize.md}/${lineHeight.lg} ${font.pnb};
  ${mixins.styledLink(color.turquoise, color.seaSalt)}
`;

export type MediaCardObjectProps = {
  ctaText?: string;
  ctaUrl?: string;
  description: string;
  personHeadShot: PersonHeadshotPropTypes;
  personName: string;
  personTitle: string;
}

const MediaObjectCard = ({
  ctaText, ctaUrl, description, personHeadShot, personName, personTitle,
}: MediaCardObjectProps) => (
  <MediaObjectCardWrapper>
    <MediaObjectCardHeading>
      <PersonHeadShot
        {...personHeadShot}
        size={{ sm: '7.2' }}
      />
      <MediaObjectCardPersonInfo>
        <MediaObjectCardName>
          {personName}
        </MediaObjectCardName>
        <MediaObjectCardTitle>
          {personTitle}
        </MediaObjectCardTitle>
      </MediaObjectCardPersonInfo>
    </MediaObjectCardHeading>
    <MediaObjectCardDescription
      dangerouslySetInnerHTML={{ __html: description }}
    />
    {ctaUrl && ctaText && (
      <MediaObjectCardCta href={ctaUrl}>
        {ctaText}
      </MediaObjectCardCta>
    )}
  </MediaObjectCardWrapper>
);

export default MediaObjectCard;
