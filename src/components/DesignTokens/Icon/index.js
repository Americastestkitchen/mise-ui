import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from './svgs';

function Icon(props) {
  const { children } = props;
  return (
    <>
      {children}
    </>
  );
}

Icon.propTypes = {
  /** children are typically svgs */
  children: PropTypes.node.isRequired,
};

export const BreadcrumbArrow = props => (
  <Icon>
    <Icons.BreadcrumbArrow
    />
  </Icon>
)


export const Close = props => (
  <Icon>
    <Icons.Close
      ariaLabel={props.ariaLabel}
      fill={props.fill}
    />
  </Icon>
)

export const Collection = props => (
  <Icon>
    <Icons.Collection
      fill={props.fill}
    />
  </Icon>
)

export const Cookbook = props => (
  <Icon>
    <Icons.Cookbook
      className={props.className}
    />
  </Icon>
)

export const FavoriteRibbon = props => (
  <Icon>
    <Icons.FavoriteRibbon
      className={props.className}
      ariaLabel={props.ariaLabel}
      ariaHidden={props.ariaHidden}
    />
  </Icon>
)

export const Lock = props => (
  <Icon>
    <Icons.Lock
      className={props.className}
      fill={props.fill}
    />
  </Icon>
)

export const VideoPlay = props => (
  <Icon>
    <Icons.VideoPlay
      fill={props.fill}
    />
  </Icon>
)

export const SearchIcon = props => (
  <Icon>
    <Icons.SearchIcon
      fill={props.fill}
    />
  </Icon>
)

export const Plus = props => (
  <Icon>
    <Icons.Plus
      fill={props.fill}
    />
  </Icon>
)

export const Checkmark = props => (
  <Icon>
    <Icons.Checkmark
      fill={props.fill}
    />
  </Icon>
)
