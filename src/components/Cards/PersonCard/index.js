import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PersonHeadShot from '../shared/PersonHeadShot';
import { color, font, fontSize, lineHeight, mixins, spacing } from '../../../styles';

const PersonCardWrapper = styled.div`
  align-items: center;
  background-color: ${color.smokeyQuartz};
  display: flex;
  flex-direction: column;
  height: 27.2rem;
  justify-content: flex-start;
  padding: 2rem 0.8rem 2rem;
  width: 27.2rem;

  .person-head-shot {
    margin-bottom: ${spacing.md};
  }

  a {
    ${mixins.styledLink(color.turquoise, color.darkerMint)}
  }
`;

const PersonCardName = styled.h3`
  color: ${color.white};
  font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
  margin-bottom: ${spacing.sm};
`;

const PersonCardDescription = styled.p`
  color: ${color.white};
  font: ${fontSize.md}/${lineHeight.md} ${font.pnr};
  text-align: center;
`;

const PersonCard = ({ description, imgAlt, imgCloudinaryId, name }) => (
  <PersonCardWrapper data-testid="person-card">
    <PersonHeadShot
      imgAlt={imgAlt}
      imgCloudinaryId={imgCloudinaryId}
    />
    <PersonCardName>
      {name}
    </PersonCardName>
    <PersonCardDescription
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </PersonCardWrapper>
);

PersonCard.propTypes = {
  description: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
  imgCloudinaryId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

PersonCard.defaultProps = {
  imgAlt: null,
};

export default PersonCard;
