import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const RecipeCard = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="49.912"
    height="38.864"
    aria-hidden="true"
    className="recipe-card"
    focusable="false"
    viewBox="0 0 49.912 38.864"
  >
    <g>
      <g>
        <path d="M48.551 38.864H1.361A1.361 1.361 0 010 37.503V1.361A1.361 1.361 0 011.361 0h47.19a1.361 1.361 0 011.361 1.361v36.142a1.361 1.361 0 01-1.361 1.361zM2.724 36.143h44.469V2.722H2.724z" fill={fill} />
      </g>
      <g>
        <path d="M43.037 9.64h-17.64a1.361 1.361 0 01-1.361-1.361 1.361 1.361 0 011.361-1.361h17.64a1.361 1.361 0 011.361 1.361 1.361 1.361 0 01-1.361 1.361z" fill={fill} />
      </g>
      <g>
        <path d="M43.037 24.063h-17.64a1.361 1.361 0 01-1.361-1.361 1.361 1.361 0 011.361-1.361h17.64a1.361 1.361 0 011.361 1.361 1.361 1.361 0 01-1.361 1.361z" fill={fill} />
      </g>
      <g>
        <path d="M43.04 31.274H6.423a1.361 1.361 0 01-1.361-1.361 1.361 1.361 0 011.361-1.361H43.04a1.361 1.361 0 011.361 1.361 1.361 1.361 0 01-1.361 1.361z" fill={fill} />
      </g>
      <g>
        <path d="M43.037 16.852h-17.64a1.361 1.361 0 01-1.361-1.361 1.361 1.361 0 011.361-1.361h17.64a1.361 1.361 0 011.361 1.361 1.361 1.361 0 01-1.361 1.361z" fill={fill} />
      </g>
      <g>
        <path d="M20.777 24.063H6.304a1.361 1.361 0 01-1.361-1.361V8.226a1.361 1.361 0 011.361-1.361H20.78a1.361 1.361 0 011.361 1.361v14.476a1.361 1.361 0 01-1.364 1.361zM7.662 21.341h11.754V9.587H7.662z" fill={fill} />
      </g>
    </g>
  </svg>
);

RecipeCard.propTypes = {
  fill: PropTypes.string,
};

RecipeCard.defaultProps = {
  fill: `${color.eclipse}`,
};

export default RecipeCard;
