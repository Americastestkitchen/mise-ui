import React from 'react';
import styled, { css } from 'styled-components';
import { color, font, fontSize, withThemes } from '../../styles';
import { untilMd } from '../../styles/breakpoints';
import { CCOSmallRooster, CIOTagline, CookingPot } from '../DesignTokens/Icon/svgs';

const iconCopy = {
  atk: [<CookingPot fill="#3d3d3d" />, 'Home of Cook\'s Country, Cook\'s Illustrated, & ATK Kids.'],
  cco: [<CCOSmallRooster />, 'Food that\'s meant to be shared with friends and family'],
  cio: [<CIOTagline />, 'Cook smarter and succeed every time'],
};

const TaglineTheme = {
  default: css``,
  atk: css`
    color: ${color.eclipse};
    font: ${fontSize.md}/2rem ${font.pnb};
    ${untilMd(css`
      max-width: 22.4rem;
    `)}
  `,
  cco: css`
    color: ${color.black};
    font: ${fontSize.md}/1.8rem ${font.pnb};
    ${untilMd(css`
      max-width: 23rem;
    `)}
  `,
  cio: css`
    color: ${color.cork};
    font: ${fontSize.lg}/2.6rem ${font.mwr};
    font-style: italic;
    position: absolute;
    top: 0;
  `,
};

const Tagline = styled.span`
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
  const [icon, copy] = iconCopy[siteKey];
  return (
    <TaglineWrapper>
      {icon}
      <Tagline>{copy}</Tagline>
    </TaglineWrapper>
  );
};

export default HomepageTagline;
