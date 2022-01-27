import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const CookbookCollection = ({ fill }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="28"
    width="38"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id="a">
        <path data-name="Path 99" d="M37.174-10.961h-1.658v-3.044a.8.8 0 0 0-.537-.829 15.711 15.711 0 0 0-5.348-.916 15.279 15.279 0 0 0-10.545 4.029A15.279 15.279 0 0 0 8.55-15.75a15.766 15.766 0 0 0-5.363.916.805.805 0 0 0-.532.792v3.081H.826a.812.812 0 0 0-.826.8v21.614a.812.812 0 0 0 .826.8h36.348a.812.812 0 0 0 .826-.8v-21.617a.812.812 0 0 0-.826-.8zm-17.257.705a13.5 13.5 0 0 1 9.714-3.9 14.206 14.206 0 0 1 4.228.636v19.9a16 16 0 0 0-4.441-.613 15.124 15.124 0 0 0-9.5 3.493zm-15.6-3.26a14.206 14.206 0 0 1 4.237-.636 13.5 13.5 0 0 1 9.7 3.9V9.251a15.114 15.114 0 0 0-9.5-3.493 15.961 15.961 0 0 0-4.436.623zM1.658-9.34h1V7.507a.809.809 0 0 0 .67.783.87.87 0 0 0 .472-.06 14.082 14.082 0 0 1 4.926-.879 13.446 13.446 0 0 1 8.645 3.3H1.658zm34.675 20.015H20.772a13.456 13.456 0 0 1 8.645-3.3 14.028 14.028 0 0 1 4.9.87.84.84 0 0 0 .542.064.8.8 0 0 0 .655-.778V-9.34h.826z" transform="translate(0 15.75)" fill={fill} />
      </clipPath>
      <clipPath id="b">
        <path data-name="Path 98" d="M0 13.3h38V-16H0z" transform="translate(0 16)" fill={fill} />
      </clipPath>
    </defs>
    <g data-name="Cookbook Collection Icon - Teal" clipPath="url(#a)">
      <g data-name="Group 1584" transform="translate(0 -.457)" clipPath="url(#b)">
        <path data-name="Path 97" d="M-9.5-8.699h57v46.312h-57z" fill={fill} />
      </g>
    </g>
  </svg>
);

CookbookCollection.propTypes = {
  fill: PropTypes.string,
};

CookbookCollection.defaultProps = {
  fill: color.mint,
};

export default CookbookCollection;
