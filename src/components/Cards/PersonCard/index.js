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

  background-color: ${({ mode }) => (mode === 'dark' ? color.smokeyQuartz : color.white)};

  .person-head-shot {
    margin-bottom: ${spacing.md};
  }

  a {
    ${mixins.styledLink(color.turquoise, color.darkerMint)};
  }
`;

const PersonCardName = styled.h3`
  color: ${({ mode }) => (mode === 'dark' ? color.white : color.eclipse)};
  font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
  margin-bottom: ${spacing.sm};
`;

const PersonCardDescription = styled.div`
  color: ${({ mode }) => (mode === 'dark' ? color.white : color.eclipse)};
  font: ${fontSize.md}/${lineHeight.md} ${font.pnr};
  text-align: center;
`;

const PersonCard = ({ description, imgAlt, imgCloudinaryId, mode, name }) => (
  <PersonCardWrapper className="person-card" data-testid="person-card" mode={mode}>
    <PersonHeadShot
      imgAlt={imgAlt}
      imgCloudinaryId={imgCloudinaryId}
    />
    <PersonCardName mode={mode}>
      {name}
    </PersonCardName>
    <PersonCardDescription
      dangerouslySetInnerHTML={{ __html: description }}
      mode={mode}
    />
  </PersonCardWrapper>
);

PersonCard.propTypes = {
  description: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
  imgCloudinaryId: PropTypes.string.isRequired,
  mode: PropTypes.string,
  name: PropTypes.string.isRequired,
};

PersonCard.defaultProps = {
  imgAlt: '',
  mode: 'dark',
};

export default PersonCard;
