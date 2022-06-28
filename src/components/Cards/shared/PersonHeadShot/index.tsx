import React from 'react';
import styled, { css } from 'styled-components';
import { md, lg } from '../../../../styles/breakpoints';
import { getImageUrl } from '../../../../lib/cloudinary';

type HeadshotSize = {
  sm: string;
  md?: string;
  lg?: string;
}

type PersonHeadshotPropTypes = {
  imgAlt?: string,
  imgCloudinaryId: string,
  size?: HeadshotSize,
}

const PersonHeadShotWrapper = styled.div<{ size: HeadshotSize }>`
  ${({ size }) => (
    css`
      border-radius: 50%;
      height: ${size.sm}rem;
      width: ${size.sm}rem;
    `
  )}

  ${({ size }) => `
    ${md(css`
      height: ${size.md || size.sm}rem;
      width: ${size.md || size.sm}rem;
    `)}
  `}

  ${({ size }) => `
    ${lg(css`
      height: ${size.lg || size.md || size.sm}rem;
      width: ${size.lg || size.md || size.sm}rem;
    `)}
  `}

  flex-shrink: 0;
  overflow: hidden;
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
