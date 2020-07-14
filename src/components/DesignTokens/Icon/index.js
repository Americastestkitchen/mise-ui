import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from './svgs';

function Icon({ children }) {
  return children;
}

Icon.propTypes = {
  /** children are typically svgs */
  children: PropTypes.node.isRequired,
};

export const BreadcrumbArrow = () => (
  <Icon>
    <Icons.BreadcrumbArrow />
  </Icon>
);

export const Checkmark = ({ fill }) => (
  <Icon>
    <Icons.Checkmark
      fill={fill}
    />
  </Icon>
);

Checkmark.propTypes = Icons.Checkmark.propTypes;

export const ChevronThinDown = ({ ariaLabel, fill }) => (
  <Icon>
    <Icons.ChevronThinDown
      ariaLabel={ariaLabel}
      fill={fill}
    />
  </Icon>
);
ChevronThinDown.propTypes = Icons.ChevronThinDown.propTypes;

export const Close = ({ ariaLabel, fill }) => (
  <Icon>
    <Icons.Close
      ariaLabel={ariaLabel}
      fill={fill}
    />
  </Icon>
);

Close.propTypes = Icons.Close.propTypes;

export const Collection = ({ fill }) => (
  <Icon>
    <Icons.Collection
      fill={fill}
    />
  </Icon>
);

Collection.propTypes = Icons.Collection.propTypes;

export const Cookbook = ({ className }) => (
  <Icon>
    <Icons.Cookbook
      className={className}
    />
  </Icon>
);

Cookbook.propTypes = Icons.Cookbook.propTypes;

export const FavoriteRibbon = ({ ariaHidden, ariaLabel, className, fill }) => (
  <Icon>
    <Icons.FavoriteRibbon
      className={className}
      ariaHidden={ariaHidden}
      ariaLabel={ariaLabel}
      fill={fill}
    />
  </Icon>
);

FavoriteRibbon.propTypes = Icons.FavoriteRibbon.propTypes;

export const Folder = ({ fill }) => (
  <Icon>
    <Icons.Folder
      fill={fill}
    />
  </Icon>
);

Folder.propTypes = Icons.Folder.propTypes;


export const Filter = ({ className, fill }) => (
  <Icon>
    <Icons.Filter
      className={className}
      fill={fill}
    />
  </Icon>
);

Filter.propTypes = Icons.Filter.propTypes;

export const Lock = ({ className, fill }) => (
  <Icon>
    <Icons.Lock
      className={className}
      fill={fill}
    />
  </Icon>
);

Lock.propTypes = Icons.Lock.propTypes;

export const Plus = ({ fill }) => (
  <Icon>
    <Icons.Plus
      fill={fill}
    />
  </Icon>
);

Plus.propTypes = Icons.Plus.propTypes;

export const Print = ({ fill }) => (
  <Icon>
    <Icons.Print
      fill={fill}
    />
  </Icon>
);

Plus.propTypes = Icons.Plus.propTypes;

export const QuestionMark = ({ fill }) => (
  <Icon>
    <Icons.QuestionMark
      fill={fill}
    />
  </Icon>
);

QuestionMark.propTypes = Icons.QuestionMark.propTypes;

export const SearchIcon = ({ fill }) => (
  <Icon>
    <Icons.SearchIcon
      fill={fill}
    />
  </Icon>
);

SearchIcon.propTypes = Icons.SearchIcon.propTypes;

export const VideoPlay = ({ fill }) => (
  <Icon>
    <Icons.VideoPlay
      fill={fill}
    />
  </Icon>
);

VideoPlay.propTypes = Icons.VideoPlay.propTypes;
