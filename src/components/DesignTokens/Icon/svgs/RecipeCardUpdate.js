import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const RecipeCardUpdate = ({ fill }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="27.038"
    width="35.396"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id="a">
        <path data-name="Rectangle 7402" d="M0 0h35.396v27.038H0z" fill={fill} />
      </clipPath>
    </defs>
    <g data-name="Recipes Icon - White">
      <g data-name="Group 65494" clipPath="url(#a)" fill={fill}>
        <path data-name="Path 42206" d="M34.5 27.038H.892A.892.892 0 0 1 0 26.146V.892A.892.892 0 0 1 .892 0H34.5a.892.892 0 0 1 .9.892v25.254a.893.893 0 0 1-.892.892M1.785 25.253h31.826V1.785H1.785z" fill={fill} />
        <path data-name="Path 42207" d="M30.063 20.464H5.348a.595.595 0 1 1 0-1.19h24.715a.595.595 0 1 1 0 1.19" fill={fill} />
        <path data-name="Path 42208" d="M30.066 16.229H5.289a.595.595 0 1 1 0-1.19h24.777a.595.595 0 1 1 0 1.19" fill={fill} />
        <path data-name="Path 42209" d="M16.746 11.999H5.39a.595.595 0 1 1 0-1.19h11.356a.595.595 0 0 1 0 1.19" fill={fill} />
        <path data-name="Path 42210" d="M16.746 7.763H5.39a.595.595 0 1 1 0-1.19h11.356a.595.595 0 0 1 0 1.19" fill={fill} />
        <path data-name="Path 42211" d="M29.881 7.246c-.178-.125-.22-.149-2.475-.155l1.606-2.029a.6.6 0 0 0-.932-.741l-2.184 2.77h-.7c-4.432 0-4.426 0-4.622.119l-.434.25v.5c.059 1.35 1.481 3.492 5.033 3.492 3.4 0 4.991-1.82 5.033-3.5v-.446z" fill={fill} />
      </g>
    </g>
  </svg>
);

RecipeCardUpdate.propTypes = {
  fill: PropTypes.string,
};

RecipeCardUpdate.defaultProps = {
  fill: color.white,
};

export default RecipeCardUpdate;
