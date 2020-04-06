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

export const Close = ({ ariaLabel, fill }) => (
  <Icon>
    <Icons.Close
      ariaLabel={ariaLabel}
      fill={fill}
    />
  </Icon>
);

Close.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};

export const Collection = ({ fill }) => (
  <Icon>
    <Icons.Collection
      fill={fill}
    />
  </Icon>
);

Collection.propTypes = {
  fill: PropTypes.string.isRequired,
};

export const Cookbook = ({ className }) => (
  <Icon>
    <Icons.Cookbook
      className={className}
    />
  </Icon>
);

Cookbook.propTypes = {
  className: PropTypes.string,
};

Cookbook.defaultProps = {
  className: null,
};

export const FavoriteRibbon = ({ ariaHidden, ariaLabel, className }) => (
  <Icon>
    <Icons.FavoriteRibbon
      className={className}
      ariaHidden={ariaHidden}
      ariaLabel={ariaLabel}
    />
  </Icon>
);

FavoriteRibbon.propTypes = {
  ariaHidden: PropTypes.bool.isRequired,
  ariaLabel: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

FavoriteRibbon.defaultProps = {
  className: null,
};

export const Filter = ({ className }) => (
  <Icon>
    <Icons.Filter
      className={className}
    />
  </Icon>
);

Filter.propTypes = {
  className: PropTypes.string,
};

Filter.defaultProps = {
  className: null,
};

export const Lock = ({ className, fill }) => (
  <Icon>
    <Icons.Lock
      className={className}
      fill={fill}
    />
  </Icon>
);

Lock.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string.isRequired,
};

Lock.defaultProps = {
  className: null,
};

export const VideoPlay = ({ fill }) => (
  <Icon>
    <Icons.VideoPlay
      fill={fill}
    />
  </Icon>
);

VideoPlay.propTypes = {
  fill: PropTypes.string.isRequired,
};

export const SearchIcon = ({ fill }) => (
  <Icon>
    <Icons.SearchIcon
      fill={fill}
    />
  </Icon>
);

SearchIcon.propTypes = {
  fill: PropTypes.string.isRequired,
};

export const Plus = ({ fill }) => (
  <Icon>
    <Icons.Plus
      fill={fill}
    />
  </Icon>
);

Plus.propTypes = {
  fill: PropTypes.string.isRequired,
};

export const Checkmark = ({ fill }) => (
  <Icon>
    <Icons.Checkmark
      fill={fill}
    />
  </Icon>
);

Checkmark.propTypes = {
  fill: PropTypes.string.isRequired,
};
