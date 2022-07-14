import React from 'react';
import styled, { css } from 'styled-components';

import PersonHeadShot from '../shared/PersonHeadShot/PersonHeadShot';
import { color, font, fontSize, lineHeight, mixins, spacing, withThemes } from '../../../styles';

type ModeType = 'dark' | 'light';

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

    background-color: ${({ mode }: { mode: ModeType }) => (mode === 'dark' ? color.smokeyQuartz : color.white)};

    .person-head-shot {
      margin-bottom: ${spacing.sm};
    }
  `,
  cco: css`
    ${mixins.ccoReviewSetBorder()}
  `,
};

const PersonCardWrapper = styled.div<{ mode: ModeType }>`
  ${withThemes(PersonCardWrapperTheme)}
`;

const PersonCardNameTheme = {
  default: css`
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.xsm};
  `,
  atk: css`
    color: ${({ mode }: { mode: ModeType }) => (mode === 'dark' ? color.white : color.eclipse)};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const PersonCardName = styled.h3<{ mode: ModeType }>`
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
    color: ${({ mode }: { mode: ModeType }) => (mode === 'dark' ? color.white : color.eclipse)};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const PersonCardDescription = styled.div<{ mode: ModeType }>`
  ${withThemes(PersonCardDescriptionTheme)}
`;

type PersonCardProps = {
  description: string,
  imgAlt?: string,
  imgCloudinaryId: string,
  mode?: ModeType,
  name: string,
};

const PersonCard = ({
  description,
  imgAlt = '',
  imgCloudinaryId,
  mode = 'dark',
  name,
}: PersonCardProps) => (
  <PersonCardWrapper
    aria-label={imgAlt}
    className="person-card"
    data-qa="person-card"
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

export default PersonCard;
