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

export const Arrow = () => (
  <Icon>
    <Icons.Arrow />
  </Icon>
);

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

export const Checkmark2 = ({ fill }) => (
  <Icon>
    <Icons.Checkmark2
      fill={fill}
    />
  </Icon>
);

Checkmark2.propTypes = Icons.Checkmark2.propTypes;

export const ChevronThinDown = ({
  ariaHidden,
  ariaLabel,
  className,
  fill,
}) => (
  <Icon>
    <Icons.ChevronThinDown
      ariaHidden={ariaHidden}
      ariaLabel={ariaLabel}
      className={className}
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

export const FastForward = ({ fill }) => (
  <Icon>
    <Icons.FastForward
      fill={fill}
    />
  </Icon>
);

FastForward.propTypes = Icons.FastForward.propTypes;

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

export const Folder = ({
  ariaHidden,
  ariaLabel,
  className,
  fill,
}) => (
  <Icon>
    <Icons.Folder
      ariaHidden={ariaHidden}
      ariaLabel={ariaLabel}
      className={className}
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

export const Pause = ({ fill }) => (
  <Icon>
    <Icons.Pause
      fill={fill}
    />
  </Icon>
);

Pause.propTypes = Icons.Pause.propTypes;

export const Phone = ({ fill }) => (
  <Icon>
    <Icons.Phone
      fill={fill}
    />
  </Icon>
);

Phone.propTypes = Icons.Phone.propTypes;

export const Plus = ({ fill }) => (
  <Icon>
    <Icons.Plus
      fill={fill}
    />
  </Icon>
);

Plus.propTypes = Icons.Plus.propTypes;

export const Print = ({
  ariaHidden,
  ariaLabel,
  className,
  fill,
}) => (
  <Icon>
    <Icons.Print
      ariaHidden={ariaHidden}
      ariaLabel={ariaLabel}
      className={className}
      fill={fill}
    />
  </Icon>
);

Print.propTypes = Icons.Print.propTypes;

export const QuestionMark = ({ fill }) => (
  <Icon>
    <Icons.QuestionMark
      fill={fill}
    />
  </Icon>
);

QuestionMark.propTypes = Icons.QuestionMark.propTypes;

export const RecipeCard = ({ fill }) => (
  <Icon>
    <Icons.RecipeCard
      fill={fill}
    />
  </Icon>
);

RecipeCard.propTypes = Icons.RecipeCard.propTypes;

export const Rewind = ({ fill }) => (
  <Icon>
    <Icons.Rewind
      fill={fill}
    />
  </Icon>
);

Rewind.propTypes = Icons.Rewind.propTypes;

export const RibbonAward = ({ fill }) => (
  <Icon>
    <Icons.RibbonAward
      fill={fill}
    />
  </Icon>
);

RibbonAward.propTypes = Icons.RibbonAward.propTypes;

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

export const Videos = ({ fill }) => (
  <Icon>
    <Icons.Videos
      fill={fill}
    />
  </Icon>
);

Videos.propTypes = Icons.Videos.propTypes;
