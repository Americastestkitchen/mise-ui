import React, { useEffect, useState } from 'react';
import { connectQueryRules } from 'react-instantsearch-dom';
import styled, { css } from 'styled-components';
import { md } from '../../styles/breakpoints';
import { color, font, fontSize, spacing } from '../../styles';
import { Close } from '../DesignTokens/Icon/svgs';

const SearchBannerSection = styled.section`
  background-color: ${color.mint};
  padding: 1.4rem ${spacing.sm};
  position: relative;
  width: 100%;

  &:hover {
    background-color: ${color.darkerMint};

    a {
      color: ${color.white};
    }
  }
`;

const SearchBannerAnchor = styled.a`
  align-items: center;
  color: ${color.white};
  display: flex;
  font: ${fontSize.md}/1 ${font.pnb};
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const SearchBannerClose = styled.button`
  height: 1.2rem;
  max-height: 1.2rem;
  max-width: 1.2rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 1.2rem;

  ${md(css`
    right: 1.8rem;
    top: 1.4rem;
  `)}
`;

export type SearchBannerProps = {
  handleClick?: () => void;
  handleView?: () => void;
  incode?: string;
  message: string;
  mixpanelType?: string;
  url: string;
};

const SearchBanner = ({
  handleClick = () => {},
  handleView = () => {},
  incode = '',
  message,
  mixpanelType = '',
  url,
}: SearchBannerProps) => {
  useEffect(handleView, [mixpanelType, handleView]);
  const mixpanelParams = { mixpanelType, incode };
  const [closed, setClosed] = useState(false);
  return !closed && message && url ? (
    <SearchBannerSection className="search-banner">
      <SearchBannerAnchor
        className="search-banner__anchor"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        onClick={handleClick}
        data-mixpanel-params={JSON.stringify(mixpanelParams)}
      >
        {message}
      </SearchBannerAnchor>
      <SearchBannerClose onClick={() => { setClosed(true); }}>
        <Close fill={color.white} />
      </SearchBannerClose>
    </SearchBannerSection>
  ) : null;
};

interface QueryItemsType extends SearchBannerProps {
  anonymousOnly: boolean;
}

export type QueryRulesProps = {
  items: QueryItemsType[];
  isAnonymous?: boolean;
  handleClickBanner?: () => void,
  handleViewBanner?: () => void
}

const QueryRules = ({
  items,
  isAnonymous = true,
  handleClickBanner = () => {},
  handleViewBanner = () => {},
}: QueryRulesProps) => {
  const loggedIn = !isAnonymous;
  const banner = items.find(item => !(item.anonymousOnly && loggedIn));
  if (banner) {
    if (banner.mixpanelType) {
      banner.handleClick = handleClickBanner;
      banner.handleView = handleViewBanner;
    }
  }
  return banner ? (
    <SearchBanner {...banner} />
  ) : null;
};

const CustomQueryRules = connectQueryRules(QueryRules);

export default CustomQueryRules;
