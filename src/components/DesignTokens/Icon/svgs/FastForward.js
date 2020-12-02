import React from 'react';
import PropTypes from 'prop-types';

import { color } from '../../../../styles';

const FastForward = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18.551 21.466"
    role="img"
    aria-label="Fast forward video by 30 seconds"
  >
    <g>
      <g>
        <path d="M8.187 5.07v2.413l6.548-3.742L8.187 0v2.98" fill={fill} />
        <path d="M17.048 7.372l-1.577 1.15A7.2 7.2 0 118.187 5.07V2.979a9.275 9.275 0 1010.364 9.211 7.139 7.139 0 00-1.503-4.818z" fill={fill} />
        <path d="M8.187 2.98v2.091" />
      </g>
      <g>
        <path d="M6.981 15.286c1.12 0 1.841-.567 1.841-1.372a1.172 1.172 0 00-1.092-1.12 1.145 1.145 0 001.022-1.064c0-.777-.672-1.267-1.764-1.267a2.3 2.3 0 00-1.788.739l.5.623a1.684 1.684 0 011.19-.483c.483 0 .868.182.868.553 0 .343-.35.5-.868.5-.175 0-.5 0-.581-.007v.9c.07-.007.385-.014.581-.014.651 0 .938.168.938.539 0 .35-.315.6-.882.6a1.83 1.83 0 01-1.281-.541l-.525.665a2.344 2.344 0 001.841.749zm4.3 0c1.337 0 1.932-1.211 1.932-2.415s-.6-2.408-1.932-2.408-1.932 1.2-1.932 2.408.593 2.415 1.93 2.415zm0-.882c-.665 0-.917-.672-.917-1.533s.252-1.526.917-1.526.917.665.917 1.526-.254 1.531-.919 1.531z" fill={fill} />
      </g>
    </g>
  </svg>
);

FastForward.propTypes = {
  fill: PropTypes.string,
};

FastForward.defaultProps = {
  fill: color.eclipse,
};

export default FastForward;
