import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import PersonHeadShot from '../shared/PersonHeadShot';
import { color, font, fontSize, grid, lineHeight, mixins, spacing } from '../../../styles';

const MediaObjectCardWrapper = styled.section`
  max-width: 100%;
  width: 100%;

  ${breakpoint('md')`
    max-width: ${grid.columnWidth};
    width: ${grid.columnWidth};
  `}
`;

const MediaObjectCardHeading = styled.div`
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
  color ${color.nobel};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
`;

const MediaObjectCardDescription = styled.p`
  font: ${fontSize.md}/${lineHeight.lg} ${font.pnr};
  margin-bottom: ${spacing.xsm};
`;

const MediaObjectCardCta = styled.a`
  font: ${fontSize.md}/${lineHeight.lg} ${font.pnb};
  ${mixins.styledLink(color.turquoise, color.seaSalt)}
`;

const MediaObjectCard = ({
  ctaText, ctaUrl, description, personHeadShot, personName, personTitle,
}) => (
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
    <MediaObjectCardDescription>
      {description}
    </MediaObjectCardDescription>
    <MediaObjectCardCta href={ctaUrl}>
      {ctaText}
    </MediaObjectCardCta>
  </MediaObjectCardWrapper>
);

MediaObjectCard.propTypes = {
  ctaText: PropTypes.string.isRequired,
  ctaUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  personHeadShot: PropTypes.shape({
    ...PersonHeadShot.propTypes,
  }).isRequired,
  personName: PropTypes.string.isRequired,
  personTitle: PropTypes.string.isRequired,
};

export default MediaObjectCard;
