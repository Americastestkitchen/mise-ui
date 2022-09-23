import React from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';
import { Hit } from 'react-instantsearch-core';
import RefinementList from '../../shared/RefinementList';
import Accordion, { Icon } from '../../../Accordion/Accordion';

export type SearchRefinementListProps = {
  attribute: string;
  handleClick?: () => void;
  icon?: Icon;
  iconSize?: 'default' | 'large';
  initialCount?: number;
  items: Hit<{ count: number; isRefined: boolean; label: string; value: string[] }>[];
  showHideLabel: string;
  transformItems?: () => void;
}

const SearchRefinementList = ({
  attribute,
  handleClick,
  icon,
  iconSize = 'default',
  initialCount = 3,
  items,
  showHideLabel,
  transformItems,
  ...restProps
}:SearchRefinementListProps) => (
  items && items.length > 0 ? (
    <Accordion
      icon={icon}
      iconSize={iconSize}
      isFieldset
      label={showHideLabel}
    >
      <RefinementList
        attribute={attribute}
        handleClick={handleClick}
        initialCount={initialCount}
        items={items}
        transformItems={transformItems}
        {...restProps}
      />
    </Accordion>
  ) : null
);

export default connectRefinementList(SearchRefinementList);
