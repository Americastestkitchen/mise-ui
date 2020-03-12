import React from 'react';
import styled from 'styled-components';

import Badge from '../../Badge';
import { Checkmark } from '../../DesignTokens/Icon/svgs'
import { color, font, fontSize } from '../../../styles';

const SearchSiteListLabel = styled.label.attrs({
  className: 'search-refinement-list__label',
})`
  align-items: center;
  color: ${color.eclipse};
  display: flex;
  font: ${fontSize.md}/1.38 ${font.pnr};
  position: relative;

  margin: 0 0 1.8rem;

  &:last-child {
    margin: 0;
  }

  &:hover {
    cursor: pointer;

    svg {
      circle {
        ${({ altFill }) => (altFill ? `fill: ${altFill};` : '')}
      }
    }
  }

  .search-refinement__badge {
    margin-right: 0.8rem;
  }
`;

const SearchSiteListCheck = styled.div`
  left: -2rem;
  position: absolute;
  width: 1.2rem;
`;

const SearchSiteListCheckbox = styled.input`
  height: 0.8rem;
  left: -2rem;
  position: absolute;
  opacity: 0;
  width: 1.2rem;
`;

const keyToButton = key => (
  {
    'atk': {
      altFill: color.tomato,
      label: 'America\'s Test Kitchen',
    },
    'cco': {
      altFill: color.denim,
      label: 'Cook\'s Country',
    },
    'cio': {
      altFill: color.cork,
      label: 'Cook\'s Illustrated',
    },
    'kids': {
      altFill: color.jade,
      label: 'ATK Kids',
    },
    'school': {
      altFill: color.tomato,
      label: 'Cooking School',
    },
    'shop': {
      altFill: color.tomato,
      label: 'ATK Shop',
    },
  }[key] || ''
);

export default ({ isRefined, label: key, refine, value }) => {
  const { altFill, label } = keyToButton(key);
  return (
    <SearchSiteListLabel altFill={altFill} htmlfor={`search-site-list--${key}`}>
      {
        isRefined ? (
          <SearchSiteListCheck>
            <Checkmark />
          </SearchSiteListCheck>
        ) : null
      }
      <SearchSiteListCheckbox
        id={`search-site-list--${key}`}
        onClick={(e) => { refine(value); }}
        type="checkbox"
      />
      <Badge
        className="search-refinement__badge"
        fill={isRefined ? altFill : color.eclipse}
        type={key}
      />
      {label}
    </SearchSiteListLabel>
  );
};
