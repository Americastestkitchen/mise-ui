import React from 'react';
import styled, { css } from 'styled-components';
import { md, lg } from '../../../../styles/breakpoints';
import { getImageUrl } from '../../../../lib/cloudinary';

type HeadshotSize = {
  sm: string;
  md?: string;
  lg?: string;
}

export type PersonHeadshotPropTypes = {
  imgAlt?: string,
  imgCloudinaryId: string,
  size?: HeadshotSize,
}

const PersonHeadShotWrapper = styled.div<{ size: HeadshotSize }>`
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 50%;

  ${({ size }) => `
    height: ${size.sm}rem;
    width: ${size.sm}rem;

    ${md(css`
      height: ${size.md || size.sm}rem;
      width: ${size.md || size.sm}rem;
    `)}

    ${lg(css`
      height: ${size.lg || size.md || size.sm}rem;
      width: ${size.lg || size.md || size.sm}rem;
    `)}
  `}
`;

const PersonHeadShotImg = styled.img`
  height: 100%;
  object-cover: fit;
  width: 100%;
`;

const PersonHeadShot = ({
  imgAlt,
  imgCloudinaryId,
  size = { sm: '10' },
}: PersonHeadshotPropTypes) => (
  <PersonHeadShotWrapper
    className="person-head-shot"
    data-testid="person-head-shot"
    size={size}
  >
    <PersonHeadShotImg
      alt={imgAlt}
      src={getImageUrl(imgCloudinaryId, { height: 100, width: 100 })}
    />
  </PersonHeadShotWrapper>
);

export default PersonHeadShot;
