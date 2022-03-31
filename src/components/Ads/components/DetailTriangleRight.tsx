import React from 'react';
import styled from 'styled-components';
import { color } from '../../../styles';
import { TriangleRight } from '../../DesignTokens/Icon/svgs';

const TriangleStyles = styled.div`> .triangle-right {
    fill: ${color.white};
    margin-left: 10px;
    margin-bottom: 1px;
    height: 9px;
    width: 9px;
  }`;

const DetailTriangleRight = () => (
  <TriangleStyles>
    <TriangleRight />
  </TriangleStyles>
);

export default DetailTriangleRight;
