import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';
import { connectQueryRules } from 'react-instantsearch-dom';

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

  ${breakpoint('md')`
    right: 1.8rem;
    top: 1.4rem;
  `}
`;

const SearchBanner = ({ message, url, mixpanelType, incode, handleClick, handleView }) => {
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

SearchBanner.propTypes = {
  message: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  mixpanelType: PropTypes.string,
  incode: PropTypes.string,
  handleClick: PropTypes.func,
  handleView: PropTypes.func,
};

SearchBanner.defaultProps = {
  mixpanelType: null,
  incode: null,
  handleClick: null,
  handleView: () => {},
};

const QueryRules = ({ items, isAnonymous, handleClickBanner, handleViewBanner }) => {
  const loggedIn = !isAnonymous;
  const banner = items.find(item => !(item.anonymousOnly && loggedIn));
  if (banner) {
    if (banner.mixpanelType) {
      banner.handleClick = handleClickBanner;
      banner.handleView = handleViewBanner;
    }
    return [<SearchBanner {...banner} />];
  }
  return [];
};

const CustomQueryRules = connectQueryRules(QueryRules);

export default CustomQueryRules;
