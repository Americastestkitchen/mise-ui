import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { color, font, fontSize, lineHeight, withThemes } from '../../../../styles';
import * as Icons from '../../../DesignTokens/Icon';
import Brands from '../../../DesignTokens/Brands';

const AffiliateLinkWrapperTheme = {
  default: css`
    display: inline-block;
    position: relative;

    > svg {
      display: block;
      margin: 1rem auto 0;
      width: 10rem;
    }
  `,
};

const AffiliateLinkWrapper = styled.div.attrs({
  className: 'affiliate-link',
})`${withThemes(AffiliateLinkWrapperTheme)}`;

const AffiliateLinkTheme = {
  default: css`
    background-color: ${color.linen};
    border-radius: 3rem;
    color: ${color.tabasco};
    display: inline-block;
    font: ${fontSize.md}/${lineHeight.md} ${font.pnb};
    min-width: 10rem;
    padding: 1rem 2rem;
    position: relative;

    svg {
      display: inline-block;
      fill: ${color.tabasco};
      height: 0.9rem;
      margin-left: 0.5rem;
      position: relative;
      top: 50%;
      width: 0.9rem;
    }
  `,
};

const AffiliateLinkEl = styled.a.attrs({
  className: 'affiliate-link__anchor',
})`${withThemes(AffiliateLinkTheme)}`;

const AffiliateLink = ({
  icon,
  text,
  title,
  url,
}) => {
  const Icon = Brands[icon] || null;
  return (
    <AffiliateLinkWrapper>
      <AffiliateLinkEl
        href={url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        title={title || text}
      >
        {text}
        <Icons.TriangleRight />
      </AffiliateLinkEl>
      {Icon && (
        <Icon />
      )}
    </AffiliateLinkWrapper>
  );
};

AffiliateLink.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
};

AffiliateLink.defaultProps = {
  icon: null,
  title: null,
};

export default AffiliateLink;
