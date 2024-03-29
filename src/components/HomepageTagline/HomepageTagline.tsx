import React from 'react';
import styled, { css } from 'styled-components';
import { color, font, fontSize, withThemes } from '../../styles';
import { untilMd } from '../../styles/breakpoints';
import { CCOSmallRooster, CIOTagline, CookingPot } from '../DesignTokens/Icon/svgs';

const iconCopy = {
  atk: [<CookingPot fill="#3d3d3d" />, 'America\'s Test Kitchen', 'Trusted by home cooks for 25 years.'],
  cco: [<CCOSmallRooster />, 'Cook\'s Country', 'Celebrating cooking in America.'],
  cio: [<CIOTagline />, 'Cook\'s Illustrated', 'Cook smarter and succeed every time'],
};

const TaglineTheme = {
  default: css``,
  atk: css`
    color: ${color.eclipse};
    font: ${fontSize.md}/2rem ${font.pnb};
    ${untilMd(css`
      max-width: 27rem;
    `)}
  `,
  cco: css`
    color: ${color.black};
    font: ${fontSize.md}/1.8rem ${font.pnb};
  `,
  cio: css`
    color: ${color.cork};
    font: ${fontSize.lg}/2.6rem ${font.mwr};
    font-style: italic;
    position: absolute;
    top: 0;
  `,
};

const Tagline = styled.h1`
  ${withThemes(TaglineTheme)}
`;

const TaglineWrapperTheme = {
  default: css`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 1.6rem;
  `,
  atk: css`
    svg {
      margin-right: 1rem;
    }
  `,
  cco: css`
    height: 28.4px;
    svg {
      margin-right: 1rem;
      overflow: visible;
    }
  `,
  cio: css`
    position: relative;

    svg {
      margin-top: 0.5rem;
    }
  `,
};

const TaglineWrapper = styled.div`
  ${withThemes(TaglineWrapperTheme)}
`;

export type HomepageTaglineProps = {
  siteKey: 'atk' | 'cio' | 'cco';
};

const HomepageTagline = ({ siteKey }: HomepageTaglineProps) => {
  const [icon, siteName, copy] = iconCopy[siteKey];
  return (
    <TaglineWrapper>
      {icon}
      <Tagline>
        <span className="visually-hidden">
          {siteName}
        </span>
        {copy}
      </Tagline>
    </TaglineWrapper>
  );
};

export default HomepageTagline;
