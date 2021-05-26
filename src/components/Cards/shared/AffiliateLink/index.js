import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { color, font, fontSize, lineHeight, mixins, withThemes } from '../../../../styles';
import * as Icons from '../../../DesignTokens/Icon';
import Brands from '../../../DesignTokens/Brands';

const AffiliateLinkWrapperTheme = {
  default: css`
    display: inline-block;
    position: relative;
    white-space: nowrap;

    > img {
      display: block;
      margin: 1rem auto 0;
      width: 10rem;
    }

    @media print {
      display: none;
    }
  `,
};

const AffiliateLinkWrapper = styled.div.attrs({
  className: 'partner-link',
})`${withThemes(AffiliateLinkWrapperTheme)}`;

const AffiliateLinkTheme = {
  default: css`
    background-color: ${color.dirtyLinen};
    border-radius: 3rem;
    color: ${color.rust};
    display: inline-block;
    font: ${fontSize.md}/${lineHeight.md} ${font.pnb};
    min-width: 16.2rem;
    padding: 1rem 2rem;
    position: relative;
    text-align: center;
    ${mixins.truncate()}

    @media(hover: hover) {
      &:hover {
        background-color: ${color.palePink};
      }
    }

    svg {
      display: inline-block;
      fill: ${color.rust};
      height: 0.9rem;
      margin-left: 0.5rem;
      position: relative;
      top: 50%;
      width: 0.9rem;
    }
  `,
};

const AffiliateLinkEl = styled.a.attrs({
  className: 'partner-link__anchor',
})`${withThemes(AffiliateLinkTheme)}`;

const AffiliateLink = ({
  dataAttrs,
  icon,
  name,
  onClick,
  text,
  title,
  url,
}) => {
  const Icon = Brands[icon] || null;
  return (
    <AffiliateLinkWrapper aria-label={name} onClick={onClick}>
      <AffiliateLinkEl
        href={url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        title={title || text}
        {...dataAttrs}
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
  dataAttrs: PropTypes.object,
  icon: PropTypes.any,
  name: PropTypes.string,
  /** for mixpanel purposes */
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
};

AffiliateLink.defaultProps = {
  dataAttrs: {},
  icon: null,
  name: null,
  onClick: null,
  title: null,
};

export default AffiliateLink;
