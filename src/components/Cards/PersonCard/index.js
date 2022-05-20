import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import PersonHeadShot from '../shared/PersonHeadShot';
import { color, font, fontSize, lineHeight, mixins, spacing, withThemes } from '../../../styles';

const PersonCardWrapperTheme = {
  default: css`
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
      margin-bottom: ${spacing.sm};
    }
  `,
  cco: css`
    ${mixins.ccoReviewSetBorder()}
  `,
};

const PersonCardWrapper = styled.div`
  ${withThemes(PersonCardWrapperTheme)}
`;

const PersonCardNameTheme = {
  default: css`
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.xsm};
  `,
  atk: css`
    color: ${({ mode }) => (mode === 'dark' ? color.white : color.eclipse)};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const PersonCardName = styled.h3`
  ${withThemes(PersonCardNameTheme)}
`;

const PersonCardDescriptionTheme = {
  default: css`
    font: ${fontSize.md}/${lineHeight.md} ${font.pnr};
    text-align: center;
    a {
      ${({ theme }) => (theme?.siteKey ? mixins.styledLinkWithSiteKey(theme.siteKey) : '')}
    }
  `,
  atk: css`
    color: ${({ mode }) => (mode === 'dark' ? color.white : color.eclipse)};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const PersonCardDescription = styled.div`
  ${withThemes(PersonCardDescriptionTheme)}
`;

const PersonCard = ({ description, imgAlt, imgCloudinaryId, mode, name }) => (
  <PersonCardWrapper
    aria-label={imgAlt}
    className="person-card"
    data-testid="person-card"
    mode={mode}
    tabIndex={0}
  >
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
